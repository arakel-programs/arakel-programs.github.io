from flask import Flask, request, jsonify, send_from_directory
from werkzeug.utils import secure_filename
import json
import os
import time

app = Flask(__name__, static_folder='.', static_url_path='')

PRODUCTS_FILE = 'products.json'
UPLOAD_FOLDER = 'images'

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)


def load_products():
    if not os.path.exists(PRODUCTS_FILE):
        return []

    try:
        with open(PRODUCTS_FILE, 'r', encoding='utf-8') as f:
            content = f.read().strip()
            if not content:
                return []
            return json.loads(content)
    except json.JSONDecodeError:
        print("Error: products.json contains invalid JSON")
        return []


def save_products(products):
    with open(PRODUCTS_FILE, 'w', encoding='utf-8') as f:
        json.dump(products, f, ensure_ascii=False, indent=2)


@app.route('/')
def home():
    return send_from_directory('.', 'index.html')


@app.route('/<path:filename>')
def serve_static_file(filename):
    return send_from_directory('.', filename)


@app.route('/images/<path:filename>')
def get_image(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)


@app.route('/api/products', methods=['GET'])
def get_products():
    try:
        return jsonify(load_products())
    except Exception as e:
        print("GET ERROR:", e)
        return jsonify({"error": str(e)}), 500


@app.route('/api/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    try:
        products = load_products()
        product = next((p for p in products if p.get('id') == product_id), None)

        if not product:
            return jsonify({"error": "Product not found"}), 404

        return jsonify(product)
    except Exception as e:
        print("GET PRODUCT ERROR:", e)
        return jsonify({"error": str(e)}), 500


@app.route('/api/products', methods=['POST'])
def add_product():
    try:
        products = load_products()

        name_en = request.form.get('nameEn', '').strip()
        name_hy = request.form.get('nameHy', '').strip()
        name_ru = request.form.get('nameRu', '').strip()

        need_scale = request.form.get('needScale', 'false') == 'true'

        main_code = request.form.get('mainCode', '').strip()
        discount_code = request.form.get('discountCode', '').strip()
        scale_code = request.form.get('scaleCode', '').strip()
        scale_discount_code = request.form.get('scaleDiscountCode', '').strip()

        what_en = request.form.get('whatEn', '').strip()
        what_hy = request.form.get('whatHy', '').strip()
        what_ru = request.form.get('whatRu', '').strip()

        healthy_en = request.form.get('healthyEn', '').strip()
        healthy_hy = request.form.get('healthyHy', '').strip()
        healthy_ru = request.form.get('healthyRu', '').strip()

        eat_en_raw = request.form.get('eatEn', '').strip()
        eat_hy_raw = request.form.get('eatHy', '').strip()
        eat_ru_raw = request.form.get('eatRu', '').strip()

        file = request.files.get('image')

        if not name_en:
            return jsonify({"error": "English product name is required"}), 400

        if not main_code:
            return jsonify({"error": "Main code is required"}), 400

        if not file or file.filename == '':
            return jsonify({"error": "Product image is required"}), 400

        filename = secure_filename(file.filename)
        unique_name = f"{int(time.time() * 1000)}_{filename}"
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], unique_name)
        file.save(filepath)

        image_path = f"images/{unique_name}"

        new_product = {
            "id": max((p.get('id', 0) for p in products), default=0) + 1,
            "name": {
                "en": name_en,
                "hy": name_hy,
                "ru": name_ru
            },
            "image": image_path,
            "needScale": need_scale,
            "codes": {
                "mainCode": main_code,
                "discountCode": discount_code,
                "scaleCode": scale_code,
                "scaleDiscountCode": scale_discount_code
            },
            "description": {
                "what": {
                    "en": what_en,
                    "hy": what_hy,
                    "ru": what_ru
                },
                "healthy": {
                    "en": healthy_en,
                    "hy": healthy_hy,
                    "ru": healthy_ru
                },
                "eat": {
                    "en": [x.strip() for x in eat_en_raw.split('\n') if x.strip()],
                    "hy": [x.strip() for x in eat_hy_raw.split('\n') if x.strip()],
                    "ru": [x.strip() for x in eat_ru_raw.split('\n') if x.strip()]
                }
            }
        }

        products.append(new_product)
        save_products(products)

        return jsonify({
            "message": "Product added successfully",
            "product": new_product
        }), 201

    except Exception as e:
        print("POST ERROR:", e)
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)