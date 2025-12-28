from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/generate", methods=["POST"])
def generate():
    data = request.json
    prompt = data.get("prompt")

    return jsonify({
        "result": f"Generated content for: {prompt}"
    })

if __name__ == "__main__":
    app.run(debug=True)
