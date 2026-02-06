const supabase = require("../config/db")


const getAllTodos = async (req, res) => {
    try {
        const { data, error } = await supabase.from("todos").select()

        if(error){
            return res.json({
                success: false,
                message: error.message
            })
        }

        res.json({
            success: true,
            data
        })
        
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: error.message
        })
    }
}

const getSigleTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { data, error } = await supabase.from("todos").select().eq("id", id).single()

        if(error){
            return res.json({
                success: false,
                message: error.message
            })
        }

        res.json({
            success: true,
            data
        })
        
    } catch (error) {
        console.log(error);
        return res.json({
          success: false,
          message: error.message,
        });
    }
}

const createTodos = async (req, res) => {
    try {
        const { title, description } = req.body;
        const { error } = await supabase.from("todos").insert([{title, description}])

        if(error){
            return res.json({
                success: false,
                message: error.message
            })
        }
        res.json({
            success: true,
            message: "Todo Added Successful"
        })
        
    } catch (error) {
        console.log(error);
        return res.json({
          success: false,
          message: error.message,
        });
    }
}
const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        // Fetch existing todo first
        const { data: existingTodo, error: fetchError } = await supabase.from("todos").select().eq("id", id).single()
        
        if(fetchError){
            return res.json({
                success: false,
                message: fetchError.message
            })
        }

        if(existingTodo.title === title && existingTodo.description === description){
            return res.json({
                success: false,
                message: "Invalid Credentials"
            })
        }

        const { error } = await supabase.from("todos").update({title, description}).eq("id", id)
        if(error){
            return res.json({
                success: false,
                message: error.message
            })
        }
        res.json({
            success: true,
            message: "Todo updated"
        })
        
    } catch (error) {
        console.log(error);
        return res.json({
          success: false,
          message: error.message,
        });
    }
}
const deleteTodos = async (req, res) => {
    try {
        const { id } = req.params;
        const { error } = await supabase.from("todos").delete().eq("id", id)

        if(error){
            return res.json({
                success: false,
                message: error.message
            })
        }
        res.json({
            success: true,
            message: "Todo Deleted"
        })
        
    } catch (error) {
        console.log(error);
        return res.json({
          success: false,
          message: error.message,
        });
    }
}

module.exports = {
  getAllTodos,
  getSigleTodo,
  createTodos,
  updateTodo,
  deleteTodos
};