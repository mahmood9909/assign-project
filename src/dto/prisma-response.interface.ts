interface PrismaErrorrDetails {
    code: string | unknown;
    message: string;
  }
  
  interface ResponseBody {
    statusCode: number;
    timestamp: Date | string;
    prismaError?: PrismaErrorrDetails;
    path: string;
  }
  