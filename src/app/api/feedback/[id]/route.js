import { feedback } from "../../route";


export async function GET(request ,{params}) {
 const {id}=await params;

 const singleFeedback=feedback.find(fd=>fd.id==id)||{};

 return Response.json(singleFeedback)
}

// ata hocce feedback/1,2 te jodi jaite chai to 
// 70.4 start