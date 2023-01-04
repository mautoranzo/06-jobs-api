const Song = require('../models/Song')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError,NotFoundError} = require('../errors')

const getAllSongs = async (req,res) =>{
    res.send('get all songs')
}

const getSong = async (req,res) =>{
    res.json('get song')
}

const createSong = async (req,res) =>{
    req.body.createdBy = req.user.userId
    const job = await Song.create(req.body)
    res.status(StatusCodes.CREATED).json({job})
}

const updateSong = async (req,res) =>{
    res.send('update song')
}

const deleteSong = async (req,res) =>{
    res.send('delete song')
}

module.exports = {
    getAllSongs,
    getSong,
    createSong,
    updateSong,
    deleteSong
}