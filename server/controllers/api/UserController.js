import HTTPStatus from "http-status";
import Response from "../../helpers/Response";
import {UserRepository} from "../../repositories";
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

let userRepository = new UserRepository();

class UserController {

    index = async (req, res) => {
        let sex = req.param('sex');
        console.log(sex);
        try {
            let users = await userRepository.find({
                where: {
                    age: {
                        $gte: 18,
                    }
                }, limit: 10
            });
            return Response.returnSuccess(res, users);
        } catch (e) {
            return Response.returnError(res, e.message, HTTPStatus.BAD_REQUEST);
        }
    };

    create = async (req, res) => {
        try {
            let body = req.body;
            let user = await userRepository.create(body);
            return Response.returnSuccess(res, user);
        } catch (e) {
            return Response.returnError(res, e.message, HTTPStatus.BAD_REQUEST);
        }
    };

    view = async (req, res) => {
        try {
            let userId = req.param('id');
            let user = await userRepository.findOne(
                {
                    where: {id: userId},
                    // include: [
                    //     {model: models.User,
                    //     as: 'user'}
                    // ]
                }
            );
            return Response.returnSuccess(res, user);
        } catch (e) {
            return Response.returnError(res, e.message, HTTPStatus.BAD_REQUEST);
        }
    };

    update = async (req, res) => {
        try {
            let userId = req.param('id');
            let body = req.body;
            let user = await userRepository.update(userId, body);
            return Response.returnSuccess(res, user);
        } catch (e) {
            return Response.returnError(res, e.message, HTTPStatus.BAD_REQUEST);

        }
    };

    delete = async (req, res) => {
        try {
            let userId = req.param('id');
            let user = await userRepository.delete(userId);
            return Response.returnSuccess(res, user);
        } catch (e) {
            return Response.returnError(res, e.message, HTTPStatus.BAD_REQUEST);
        }
    }
}

export default new UserController();