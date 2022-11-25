const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");
//api thoughts
router.route("/").get(getAllThought);
//api thoughts by ID
router.route("/:userId").post(createThought)
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);
//api thoughts ID by reactions
router.route("/:thoughtId/reactions").post(addReaction);
//remove reaction
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
