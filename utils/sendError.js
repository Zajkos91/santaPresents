

class ValidationError extends Error {

}

const handleError = (err, req, res, next) => {
   // jeżeli w moim programie była by mozliwosc ze wchodzimy do elementu ktory nie istnieje to przydalby sie taki kod
    /*
    if (err instanceof NotFoundError) {
    res
        .status(404)
        .render('error', {
            message: 'Nie mozna znalezc elementu o danym ID.',
            });
            return
            }
     */
    console.error(err);
    res.status(err instanceof ValidationError ? 400 : 500)
        .render('error', {
            message: err instanceof ValidationError ? err.message : 'Przepraszamy, spróbuj ponownie za kilka minut.',
        })
    };

module.exports = {
    handleError,
    ValidationError,
};

