// Require Dotenv
require("dotenv").config();
// Require the cloudinary library
const cloudinary = require("cloudinary").v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
});

////////////////////////////////////////////
// Documentation:
// Basic upload: https://cloudinary.com/documentation/image_upload_api_reference#upload
// Presets: https://cloudinary.com/documentation/admin_api#create_an_upload_preset
// Eval: https://cloudinary.com/documentation/upload_parameters#eval_modify_upload_options_before_upload
////////////////////////////////////////////

////////////////////////////////////////////
// Example image upload:
// cloudinary.uploader
//   .upload("hat.jpg", {
//     use_filename: true,
//     resource_type: "auto",
//   })
//   .then((result) => console.log(result));
////////////////////////////////////////////

////////////////////////////////////////////
// Upload Challenge #1
// Image: https://cdn.pixabay.com/photo/2025/03/22/07/09/havanese-dog-9486395_1280.jpg
// Upload the image with the following parameters:
//    public_id (choose your own)
//    asset_folder/folder (choose your own - helpful to put all practice uploads into a single folder)
//    resource_type (choose the appropriate type)
//    colors
//    tags (choose your own)
////////////////////////////////////////////

////////////////////////////////////////////
// Upload Challenge #2
// Image: https://cdn.pixabay.com/photo/2025/03/22/07/09/havanese-dog-9486395_1280.jpg
// Create an upload preset and then use it:
//    Preset:
//        name
//        transformation - crop the image and use f_auto, q_auto, & g_auto
//    Upload:
//        public_id
//        asset_folder / folder;
//        upload_preset
////////////////////////////////////////////

////////////////////////////////////////////
// Upload Challenge #3
// Image: https://cdn.pixabay.com/photo/2025/03/22/07/09/havanese-dog-9486395_1280.jpg
// Upload w/ auto tagging:
//    public_id
//    asset_folder/folder
//    auto_tagging - set at 0.7
//    detection/categorization (depending on which type you choose - may need to signup for an add-on to test)
////////////////////////////////////////////

////////////////////////////////////////////
// Upload Challenge #4
// Image: https://cdn.pixabay.com/photo/2025/03/22/07/09/havanese-dog-9486395_1280.jpg
// Upload w/ eval:
//    public_id
//    asset_folder/folder
//    eval - ???
////////////////////////////////////////////
