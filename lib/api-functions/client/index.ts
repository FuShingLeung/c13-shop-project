export const sendMail = async (vals) => {
  console.log(vals);
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset="UTF-8"',
      },
      body: JSON.stringify(vals),
    });
    if (!response.ok) throw Response;
    console.log('Email sent');
    //TODO - Hook up to snackbar
  } catch (err) {
    console.log(err);
  }
};
