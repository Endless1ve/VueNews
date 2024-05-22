import useVuelidate from "@vuelidate/core";
import { helpers, required } from "@vuelidate/validators";

const searchRules = {
  query: {
    required: helpers.withMessage("Поле не должно быть пустым", required),
  },
};

function setupValidation(rules, fields) {
  return useVuelidate(rules, fields);
}

function validate(v$, callback) {
  v$.value.$touch();
  if (!v$.value.$invalid) {
    callback();
    v$.value.$reset();
  }
}

export { setupValidation, validate, searchRules };
