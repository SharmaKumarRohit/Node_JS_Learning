# Upload multiple images via multer in NodeJS

A client running an e-commerce website wants to allow vendors to upload multiple images of their products. You need to implement an endpoint that lets users upload up to 5 images per product, which will be saved in a specific folder on the server.

## Requirements:

1. Create an Express route `/uploadProductImages` to handle multiple file uploads.
2. Configure multer to:
   - Store images in the `uploads/product-images` directory.
   - Accept up to 5 images in one request.
   - Restrict file types to images (`JPEG, PNG`).
3. After the files are uploaded, return a JSON response with the URLs of the uploaded images.
4. Test the route by uploading multiple images for a product using Postman or a frontend form.

## Hints:

- Use `upload.array('images', 5)` for handling multiple file uploads.
- In your JSON response, include the list of URLs like `[{ "url": "/uploads/product-images/1671023498000-image1.jpg" }]`.

## Example Solution Outline (For Reference Only):

- Adjust the route to handle an array of files and output the URLs as JSON.
