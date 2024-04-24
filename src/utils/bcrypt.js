const bcrypt = require('bcrypt');

// Función para hacer el hash de una contraseña
const generarHashpass=async (contraseña)=>{
  const saltRounds = 10;

  try {
    // Generar un salt
    const salt = await bcrypt.genSalt(saltRounds);

    // Generar el hash de la contraseña utilizando el salt
    const hash = await bcrypt.hash(contraseña, salt);
    return hash;
    
  } catch (error) {
    throw error;
  }
}

module.exports={
    generarHashpass
  };
