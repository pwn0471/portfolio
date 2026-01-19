const Footer = () => {
  try {
    return (
      <footer className="py-12 px-6 text-center">
        <p className="text-gray-200 text-m">
          © All Rights Reserved.
        </p>
      </footer>
    );
  } catch (error) {
    console.error("Footer render error:", error);

    return (
      <footer className="py-12 text-center text-gray-200 text-m">
        © All Rights Reserved.
      </footer>
    );
  }
};

export default Footer;
