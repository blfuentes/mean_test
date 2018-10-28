import { User } from "../models/user";

export class UserController{
    public getUsers = async(req, res) => {
        const users = await User.find();
        res.json(users);
    }
    
    public createUser = async (req, res) =>{
        const user = new User({
            name: req.body.name,
            age: req.body.age
        });
        await user.save();
        console.log(user);

        res.json({
           "status": "user saved" 
        });
    }
    
    public getUser = async (req, res) => {
        console.log(req.params);
        const user = await User.findById(req.params.id);
        res.json(user);
        // res.json("received");
    }
    
    public editUser = async (req, res) => {
        const { id } = req.params;
        const user = {
            name: req.body.name,
            age: req.body.age
        };
        await User.findByIdAndUpdate(id, { $set: user }, { new: true });
        res.json({
            "status": "user updated"
        })
    }
    
    public deleteUser = async (req, res) => {
        await User.findByIdAndRemove(req.params.id);

        res.json({
            "status": "user deleted"
        });
    } 
}
