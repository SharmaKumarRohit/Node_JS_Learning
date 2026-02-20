# Question 1: Profile Picture Upload

A client wants users to upload a profile picture during registration. The image should be
saved on the server, and the URL should be stored in the database (for now, simulate
the database by logging the URL to the console).

## Requirements:

1. Create an Express route `/uploadProfilePicture` to handle the profile picture upload.
2. Configure multer to:
   - Store the uploaded images in an `uploads/profile-pics` directory.
   - Only accept images (`JPEG, PNG`).
   - Limit the file size to `1 MB`.
3. After the file is successfully uploaded:
   - Save the file with a unique name using a `timestamp prefix` (e.g., 1671023498000-profile.jpg).
   - Log the image path (e.g., /uploads/profile-pics/1671023498000-profile.jpg) to the console.
4. Test the route by uploading a sample profile picture using `Postman` or a `frontend form`.

## Hints:

- Use multer’s `diskStorage` to configure file `destination` and `filename`.
- Use a `regex` or `mimetype` filter to restrict file types to images only.
- Use error handling for cases where the file is `too large` or the `wrong type is uploaded`.

## Example Solution Outline (For Reference Only):

- Create a basic Express route, configure multer with `diskStorage`, and `add filters` and `limits`.
