export const manejoError = (menssage, status, name) => {
    err({
        message: menssage,
        status: status,
        name: name
    });
};

const err = (e) => {
    const error = new Error(e.message);
    error.status = e.status;
    error.name = e.name;
    throw error;
};