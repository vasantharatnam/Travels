import express from "express";

import {createTour , updateTour  , deleteTour , getSingleTour, getAllTour, getTourBySearch, getFeaturedTour, getTourCount} from './../controllers/tourController.js'

const router = express.Router();

import { verifyAdmin } from "../utils/verifyToken.js";

//create new tour
router.post('/' , verifyAdmin,  createTour);


//update new tour
router.put('/:id' , verifyAdmin, updateTour);

//delete new tour
router.delete('/:id' , verifyAdmin, deleteTour);

//get single tour
router.get('/:id' , getSingleTour);

//get all tours

router.get('/' , getAllTour);

//get tour by search

router.get('/search/getTourBySearch' , getTourBySearch )

//get tour by feature

router.get('/search/getFeaturedTours' , getFeaturedTour)

//get tour count

router.get('/search/getTourCount' , getTourCount)

export default router;