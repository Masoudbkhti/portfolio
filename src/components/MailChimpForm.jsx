import MailchimpSubscribe from "react-mailchimp-subscribe";
import Newsletter from "./Newsletter";
const MailChimpForm = () => {
  const postUrl =
    "https://billigbook.us21.list-manage.com/subscribe/post?u=2f9eb32688eb05ce2aab4e54c&id=f8237fe434";
  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </>
  );
};

export default MailChimpForm;
