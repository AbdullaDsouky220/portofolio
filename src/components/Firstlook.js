import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
function Firstlook () {
  const svgVariant = {
    hidden: {
      opacity: 0,
   
    },
    visible: {
      opacity: 1,

      transition: {
        duration: 1,
      },
      
    },
    exit: {
      opacity: 0,
      scale:0,
      x:'-100vw',
      transition: {
        duration: 1,
      },
    },
  };
  const pathVariant = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {duration: 2},
    },
  };
  const pathVariant2 = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        delay: 1,
      },
    },
  };
  return (
    <AnimatePresence>
      <div className=" relative h-[100vh]   bg-secondary overflow-hidden">
        <div className=" w-[1200px] md:w-auto   -translate-x-[25rem] translate-y-[10px] md:translate-y-[0%] md:translate-x-[0%] ">
          <motion.svg
            variants={svgVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            zoomAndPan="magnify"
            viewBox="0 0 1440 809.999993"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <defs>
              <g />
              <motion.clipPath id="9b87ea0709">
                <motion.path
                  variants={pathVariant}
                  initial="hidden"
                  animate="visible"
                  d="M 658.5 332.25 L 782.25 332.25 L 782.25 477.75 L 658.5 477.75 Z M 658.5 332.25 "
                  clipRule="nonzero"
                />
              </motion.clipPath>
              <clipPath id="432c2ef92d">
                <motion.path
                  variants={pathVariant}
                  initial="hidden"
                  animate="visible"
                  d="M 658.503906 332.25 L 782.246094 332.25 L 782.246094 477.75 L 658.503906 477.75 Z M 658.503906 332.25 "
                  clipRule="nonzero"
                />
              </clipPath>
              <clipPath id="9a8b4a4e35">
                <motion.path
                  variants={pathVariant}
                  initial="hidden"
                  animate="visible"
                  d="M 720.375 332.25 L 782.246094 368.101562 L 782.246094 441.898438 L 720.375 477.75 L 658.503906 441.898438 L 658.503906 368.101562 L 720.375 332.25 "
                  clipRule="nonzero"
                />
              </clipPath>
            </defs>
            <g clipPath="url(#9b87ea0709)">
              <motion.path
                variants={pathVariant}
                initial="hidden"
                animate="visible"
                fill="#09182f"
                d="M 720.375 332.25 L 782.246094 368.101562 L 782.246094 441.898438 L 720.375 477.75 L 658.503906 441.898438 L 658.503906 368.101562 L 720.375 332.25 "
                fillOpacity="1"
                fillRule="nonzero"
              />
            </g>
            <g clipPath="url(#432c2ef92d)">
              <g clipPath="url(#9a8b4a4e35)">
                <motion.path
                  variants={pathVariant}
                  initial="hidden"
                  animate="visible"
                  strokeLinecap="butt"
                  transform="matrix(0.75, 0, 0, 0.746992, 658.504197, 332.250003)"
                  fill="none"
                  strokeLinejoin="miter"
                  d="M 82.494408 -0.00000439758 L 164.989204 47.994588 L 164.989204 146.786682 L 82.494408 194.781275 L -0.000387792 146.786682 L -0.000387792 47.994588 L 82.494408 -0.00000439758 "
                  stroke="#64ffda"
                  strokeWidth="6"
                  strokeOpacity="1"
                  strokeMiterlimit="4"
                />
              </g>
            </g>
            <g fill="#64ffda" fillOpacity="1">
              <g transform="translate(706.898408, 415.499999)">
                <g>
                  <motion.path
                    variants={pathVariant2}
                    initial="hidden"
                    animate="visible"
                    d="M 22.34375 0 L 18.8125 -9.0625 L 7.21875 -9.0625 L 3.734375 0 L 0 0 L 11.4375 -29.390625 L 14.765625 -29.390625 L 26.15625 0 Z M 17.71875 -12.34375 L 14.4375 -21.203125 C 14.351562 -21.421875 14.210938 -21.816406 14.015625 -22.390625 C 13.828125 -22.960938 13.644531 -23.554688 13.46875 -24.171875 C 13.289062 -24.785156 13.144531 -25.253906 13.03125 -25.578125 C 12.8125 -24.734375 12.585938 -23.90625 12.359375 -23.09375 C 12.128906 -22.289062 11.929688 -21.660156 11.765625 -21.203125 L 8.453125 -12.34375 Z M 17.71875 -12.34375 "
                  />
                </g>
              </g>
            </g>
          </motion.svg>

        </div>
      </div>
    </AnimatePresence>
  );
}

export default Firstlook;
