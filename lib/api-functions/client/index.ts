import { ContactFormData } from "@/ts/interfaces/props.interfaces";

export const sendMail = async (vals: ContactFormData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset="UTF-8"',
      },
      body: JSON.stringify(vals),
    });
    if (!response.ok) throw Response;
    //TODO - Hook up to snackbar
  } catch (err) {
    console.log(err);
  }
};
