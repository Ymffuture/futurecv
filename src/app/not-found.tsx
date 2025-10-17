import { Column, Heading, Text } from "@/once-ui/components";

export default function NotFound() {
  return (
    <Column
      as="section"
      fill
      center
      paddingBottom="160"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)",
        color: "#fff",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating gradient circles for depth */}
      <div
        style={{
          position: "absolute",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.15)",
          top: "20%",
          left: "10%",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.1)",
          bottom: "10%",
          right: "15%",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      {/* 404 Number */}
      <Text
        marginBottom="s"
        variant="display-strong-xl"
        style={{
          fontSize: "8rem",
          fontWeight: 900,
          color: "#fff",
          textShadow: "0 8px 25px rgba(0,0,0,0.3)",
          animation: "bounce 2s infinite",
          zIndex: 1,
        }}
      >
        404
      </Text>

      {/* Title */}
      <Heading
        marginBottom="l"
        variant="display-default-xs"
        style={{
          fontSize: "2rem",
          color: "rgba(255,255,255,0.95)",
          fontWeight: 600,
          zIndex: 1,
        }}
      >
        Page Not Found
      </Heading>

      {/* Subtitle */}
      <Text
        onBackground="neutral-weak"
        style={{
          color: "rgba(255,255,255,0.8)",
          maxWidth: "400px",
          fontSize: "1rem",
          lineHeight: 1.6,
          zIndex: 1,
        }}
      >
        The page you’re looking for doesn’t exist or was moved to another location.
      </Text>

      {/* Bounce animation inline keyframes */}
      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-20px); }
          60% { transform: translateY(-10px); }
        }
      `}</style>
    </Column>
  );
}

