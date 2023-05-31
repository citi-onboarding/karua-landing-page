import { Artists } from '../models/Artists';
import { Request, Response } from 'express';
import { Citi, Crud } from '../global'

export default class ArtistController implements Crud {

    async create(request: Request, response: Response){
        const {
            link,
            url,
            artist,
            description,
            productOne,
            descriptionOne,
            imageOne,
            linkOne,
            productTwo,
            descriptionTwo,
            imageTwo,
            linkTwo,
            productThree,
            descriptionThree,
            imageThree,
            linkThree} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(
            link,
            url,
            artist,
            description,
            productOne,
            descriptionOne,
            imageOne,
            linkOne,
            productTwo,
            descriptionTwo,
            imageTwo,
            linkTwo,
            productThree,
            descriptionThree,
            imageThree,
            linkThree);
        if(isAnyUndefined) return response.status(400).send();

        const newArtist = {
            link,
            url,
            artist,
            description,
            productOne,
            descriptionOne,
            imageOne,
            linkOne,
            productTwo,
            descriptionTwo,
            imageTwo,
            linkTwo,
            productThree,
            descriptionThree,
            imageThree,
            linkThree
        };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Artists, newArtist);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Artists);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: artistFound, message } = await Citi.findByID(Artists, id); 

        console.log(id);
           
        if(!artistFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Artists, artistFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {
            link,
            url,
            artist,
            description,
            productOne,
            descriptionOne,
            imageOne,
            linkOne,
            productTwo,
            descriptionTwo,
            imageTwo,
            linkTwo,
            productThree,
            descriptionThree,
            imageThree,
            linkThree} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(
            link,
            url,
            artist,
            description,
            productOne,
            descriptionOne,
            imageOne,
            linkOne,
            productTwo,
            descriptionTwo,
            imageTwo,
            linkTwo,
            productThree,
            descriptionThree,
            imageThree,
            linkThree, 
            id
            );
        if(isAnyUndefined) return response.status(400).send();

        const userWithUpdatedValues = {
            link,
            url,
            artist,
            description,
            productOne,
            descriptionOne,
            imageOne,
            linkOne,
            productTwo,
            descriptionTwo,
            imageTwo,
            linkTwo,
            productThree,
            descriptionThree,
            imageThree,
            linkThree};

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Artists, id, userWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    
}