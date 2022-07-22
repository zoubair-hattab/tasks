import * as Yup from "yup";
import parse from "date-fns/parse";

const validationSchemaArray = [
  Yup.object({
    compaign_type: Yup.string().required("Your must choose the compaign type."),
    country_first_field: Yup.string().when("compaign_type", {
      is: (compaign_type) => {
        return compaign_type == "I want to create a company campaign";
      },
      then: Yup.string().required("Your must select a country."),
    }),
    country_second_field: Yup.string().when("compaign_type", {
      is: (compaign_type) => {
        return compaign_type == "I want to create a Not for profit campaign";
      },
      then: Yup.string().required("Your must select a country. "),
    }),
  }),

  Yup.object({
    email: Yup.string()
      .email("Please enter a valid email.")
      .required("Please enter your email."),
  }),

  Yup.object({
    validation_email_number: Yup.number("oops. Please enter a number").required(
      "Please enter the verfication phone number."
    ),
  }),

  Yup.object({
    full_phone_number: Yup.object({
      country_code: Yup.string().required("Please choose your country code."),
      phone_number: Yup.number("Please enter a valid phone number.").required(
        "Please enter your phone number."
      ),
    }),
  }),

  Yup.object({
    validation_phone_number: Yup.number("oops. Please enter a number").required(
      "Please enter the verfication phone number."
    ),
  }),

  Yup.object({
    password: Yup.string()
      .matches(
        /[a-z]/,
        "Your password must have at least one lawercase character."
      )
      .matches(
        /[A-Z]/,
        "Your password must have at least one uppercase character."
      )
      .matches(/[0-9]/, "Your password must have at least one number.")
      .matches(
        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
        "Your password must have at least one special character."
      )
      .min(8, "Password is too short - should be 8 chars minimum.")
      .required("Please enter a password."),
  }),

  Yup.object({
    first_name: Yup.string().required("Please enter your first name"),
    last_name: Yup.string().required("Please enter your last name"),
    date_birthday: Yup.date()
      .transform(function (value, originalValue) {
        if (this.isType(value)) {
          return value;
        }
        const result = parse(originalValue, "dd.MM.yyyy", new Date());
        return result;
      })
      .typeError("Please enter a valid date")
      .required("Please enter your date of birthday.")
      .min("1969-11-13", "Date is too early."),
  }),

  Yup.object({
    country: Yup.string().required("Please choose your country."),
    zip_code: Yup.string().required("Please enter your zip code."),
    address_one: Yup.string().required("Please enter your address"),
    address_two: Yup.string(),
    city: Yup.string().required("Please enter your city"),
  }),

  Yup.object({
    country_business_address: Yup.string().required(
      "Please choose country business address."
    ),
    legal_business_name: Yup.string().required(
      "Please enter your legal business name"
    ),
  }),

  Yup.object({
    business_country: Yup.string().required("Please choose a country."),
    business_zip_code: Yup.string().required("Please enter a zip code."),
    business_address_one: Yup.string().required("Please enter an address"),
    business_address_two: Yup.string(),
    business_city: Yup.string().required("Please enter a city"),
  }),

  Yup.object({
    company_role: Yup.string().required(
      "Your must choose your role in the company."
    ),
  }),

  Yup.object({
    twitter: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .required("Please the twitter account"),
    linkedin: Yup.string().matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    ),
    instagram: Yup.string().matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    ),
    facebook: Yup.string().matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    ),
  }),

  Yup.object({
    short_description: Yup.string().required(
      "Please enter a short description"
    ),
    long_description: Yup.string().required("Please enter a long description."),
  }),

  Yup.object({
    money_fund: Yup.number().required("Please enter a money amount."),
  }),

  Yup.object({
    raise_period: Yup.number()
      .min(1, "Your must between 1 and 30 days")
      .max(30, "Your must between 1 and 30 days")
      .required("Please enter a raise period you want."),
  }),

  Yup.object({
    yield_period: Yup.number()
      .min(1, "Your must between 1 and 90 days")
      .max(90, "Your must between 1 and 90 days")
      .required("Please enter a raise period you want."),
  }),
  Yup.object({
    identity_country: Yup.string().required("Please choose a country."),
    identity_type: Yup.string().required(
      "Please choose the type of identity methed."
    ),
    id_image: Yup.mixed().required("Please enter an image."),
    selfie_image: Yup.mixed().required("Please enter an image."),
  }),
];

export default validationSchemaArray;
