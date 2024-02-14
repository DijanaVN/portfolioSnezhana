import { motion } from "framer-motion";
interface Props {
  children: JSX.Element;
}

export const Hover = ({ children }: Props) => (
  <motion.div
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 1.1 }}
    drag="x"
    dragConstraints={{ left: -100, right: 100 }}
  >
    {children}
  </motion.div>
);
