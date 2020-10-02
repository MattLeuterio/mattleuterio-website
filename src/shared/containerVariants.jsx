 const containerVariants = {
    hidden: { 
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: { duration: .7},
    },
    exit: {
      scale: 10,
      opacity: 0,
      transition: { duration: .7, ease: 'easeIn' }
    }
  }

  export default containerVariants;