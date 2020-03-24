import mongoose = require("mongoose");

interface IProducts extends mongoose.Document { 
    name: string;    
    edad: number;  
}