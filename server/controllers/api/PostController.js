import HTTPStatus from "http-status";
import Response from "../../helpers/Response";
import {PostRepository} from "../../repositories";

let postRepository = new PostRepository();

class PostController {

    index = async (req, res) => {
        try {
            let posts = await postRepository.find();
            return Response.returnSuccess(res, posts);

        } catch (e) {
            return Response.returnError(res, e.message, HTTPStatus.BAD_REQUEST);
        }
    };

    create = async (req, res) => {
        try {
            let body = req.body;
            let post = await postRepository.create(body);
            return Response.returnSuccess(res, post);
        } catch (e) {
            return Response.returnError(res, e.message, HTTPStatus.BAD_REQUEST);
        }
    };

    view = async (req, res) => {
        try {
            let postId = req.param('id');
            let post = await postRepository.findOne(
                {
                    where: {id: postId},
                    // include: [
                    //     {model: models.User,
                    //     as: 'user'}
                    // ]
                }
            );
            console.log(post);
            return Response.returnSuccess(res, post);
        } catch (e) {
            return Response.returnError(res, e.message, HTTPStatus.BAD_REQUEST);
        }
    };

    update = async (req, res) => {
        try {
            let postId = req.param('id');
            let body = req.body;
            let post = await postRepository.update(postId, body);
            return Response.returnSuccess(res, post);
        } catch (e) {
            return Response.returnError(res, e.message, HTTPStatus.BAD_REQUEST);
        }
    };

    delete = async (req, res) => {
        try {
            let postId = req.param('id');
            let post = await postRepository.delete(postId);
            return Response.returnSuccess(res, post);
        } catch (e) {
            return Response.returnError(res, e.message, HTTPStatus.BAD_REQUEST);
        }
    }

}

export default new PostController();