export const fadeInLeftVariant = {
    hidden: {
        x: -50,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,

        transition: {
            type: 'tween',
            duration: 1,
        }
    }
}

export const fadeInRightVariant = {
    hidden: {
        x: 50,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,

        transition: {
            type: 'tween',
            duration: 1,
        }
    }
}

export const fadeInTopVariant = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,

        transition: {
            type: 'tween',
            duration: 1,
        }
    }
}

export const fadeInBottomVariant = {
    hidden: {
        y: 50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,

        transition: {
            type: 'tween',
            duration: 1,
        }
    }
}

export const slideInLeft = {
    hidden: {
        x: '-100vh',
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 0.99,

        transition: {
            type: 'tween',
            duration: 0.8,
        }
    },
    exit: {
        opacity: 0.2,
        x: '-100vh',

        transition: {
            type: 'tween',
            duration: 0.9,
        }
    }
}