
export default function handler(req,res) {

  let pincodes ={
    "362263":["Junagadh,(Bagadu)","Gujrat"],
    "534313":["West godawari,(Devarapalli)","Andhra pradesh"],
    "360001":["Rajkot","Gujrat"],
    "401102":["Palghar","Maharashtra"],
  }
  res.status(200).json(pincodes)
}
