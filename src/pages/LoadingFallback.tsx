import { motion } from "framer-motion";

export default function LoadingFallback() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-[#0A0A0A] text-white">

            {/* Glow Background */}
            <div className="absolute w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

            {/* FO Logo */}
            <div className="relative flex items-center justify-center">

                {/* Outer rotating ring */}
                <motion.div
                    className="absolute w-32 h-32 rounded-full border border-white/10"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                />

                {/* Inner pulse ring */}
                <motion.div
                    className="absolute w-24 h-24 rounded-full border border-blue-500/40"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                />

                {/* FO Text */}
                <motion.span
                    className="text-3xl font-semibold tracking-widest bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    FO
                </motion.span>
            </div>

            {/* Brand Name */}
            <motion.h1
                className="mt-6 text-xl tracking-[0.3em] text-white/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                FLATORBIT
            </motion.h1>

            {/* Tagline */}
            <motion.p
                className="mt-2 text-sm text-white/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                Initializing smarter automation...
            </motion.p>
        </div>
    );
}