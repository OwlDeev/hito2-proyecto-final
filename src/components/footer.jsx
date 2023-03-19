import "../css/footer.css";
import {
  Typography,
} from "@mui/material";

function Footer() {
  return (
    <>
      <footer className="footer">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} p={1}>
          <center>© 2016-2023 Developer OwlDev. All rights reserved.</center>
        </Typography>
      </footer>
    </>
  );
}

export default Footer;
