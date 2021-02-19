 const containerVariants = {
    hidden: { 
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: .6,},
    },
    exit: {
      opacity: 0,
      transition: { duration: .6, ease: 'easeIn' },
    }
  }

  export default containerVariants;