import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";

const useResponse = () => {
  const router = useRouter();
  const toast = useToast();

  const shouldRedirect: string = useMemo(() => "Data Not Found", []);

  const showToast = useCallback(
    (
      title: string,
      status: "warning" | "error" | "success",
      message?: string
    ) => {
      toast({
        position: "top",
        title: title,
        description: message,
        status: status,
        duration: 3000,
        isClosable: true,
      });
    },
    [toast]
  );

  const handleSuccess = useCallback(
    (message?: string) => {
      showToast("Success", "success", message);
    },
    [showToast]
  );

  const handleError = useCallback(
    (errorCode: number, message?: string, redirect = true) => {
      switch (errorCode) {
        case 403:
          // Denied
          console.log("Error 403", message);
          break;
        case 404:
          // Invalid / Not Found
          console.log("Error 404", message);
          break;
        case 413:
          // Request too large
          console.log("Error 413", message);
          showToast("Oops..", "error", message);
          break;
        case 500:
          // Server Error
          console.log("Error 500 :(", message);
          showToast("Oops..", "error", message);
          break;
        case 400:
          // Client Error
          console.log("Error 400", message);
          showToast("Oops..", "warning", message);
          if (redirect && shouldRedirect.includes(message as string)) {
            router.back();
          }
          break;
        default:
          // Unknown
          showToast(
            "Ooops..",
            "error",
            message ?? "Something Went Wrong Please Try Again Later"
          );
          break;
      }
    },
    [router, shouldRedirect, showToast]
  );

  return { handleSuccess, handleError };
};

export default useResponse;
