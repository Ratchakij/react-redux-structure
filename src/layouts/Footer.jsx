import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { IconButton, Stack, Typography } from "@mui/material";

const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-8xl">
        <div className="px-4 pt-2 pb-10 flex justify-between border-t-2">
          <div className="w-3/5 relative">
            <Typography variant="h5">Material Tailwind</Typography>
            <Stack direction="row" sx={{ position: "absolute", bottom: 0 }}>
              <IconButton size="small" aria-label="facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton size="small" aria-label="instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton size="small" aria-label="twitter">
                <XIcon />
              </IconButton>
              <IconButton size="small" aria-label="github">
                <GitHubIcon />
              </IconButton>
            </Stack>
          </div>
          <div className="w-2/5 px-4 grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title} className="flex flex-col">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link} className="list-none">
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="text-nowrap font-normal no-underline transition-colors hover:text-blue-500 hover:underline "
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="w-full py-2 flex items-center justify-center bg-[#f0f2f5] border-t border-slate-200">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/" className="no-underline">
              Material Tailwind
            </a>
            . All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
