 const containerVariants = {
    hidden: { 
      scale: 0,
      overflow: "hidden"
    },
    visible: {
      scale: 1,
      transition: { duration: .7},
      overflow: "visible"
    },
    exit: {
      scale: 10,
      opacity: 0,
      overflow: "hidden",
      transition: { duration: .7, ease: 'easeIn' }
    }
  }

  export default containerVariants;