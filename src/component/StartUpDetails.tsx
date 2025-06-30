
import { useQuery } from 'convex/react';
import { useParams } from 'react-router-dom'
import { api } from "D:/project/product/bountify/convex/_generated/api.js"; 
import { Id } from '../../convex/_generated/dataModel';
import Navbar from './Navbar';
import { Book,  Calendar, CloudUpload, DollarSign, Download, Percent, StampIcon, Star } from 'lucide-react';
function Startupdetails() {
      const { id } = useParams<{ id: string }>();
      const data=useQuery(api.startupcardschema.getTask,{id:id as Id<"StartUpCard">})
  return (
  <div className='overflow-x-hidden mb-6'>
    <Navbar></Navbar>
    <div className='h-screen w-screen   items-center  flex flex-col  gap-8 justify-evenly '>
      <div className='h-[20%] bg-gray-200  w-[80%] mt-6 flex justify-around rounded-2xl p-2'>
        <div className='w-[40%] h-[100%] flex flex-col justify-around'>
          <img width={120} src={data?.img}></img>
           <div className='h-[30%] w-[100%] text-2xl'><div>{data?.name}</div></div>
        </div>
          <div className='w-[40%] h-[100%] flex flex-col justify-around '>
          <div className='h-[30%] w-[100%] text-xl text-center  bg-teal-400 rounded-2xl flex  justify-center items-center'><div>place order and make payemnt 24*7</div></div>
           <div className='h-[30%] w-[100%] text-2xl text-center'><div>WatchList</div></div>
        </div>
      </div>
       <div className='h-[80%]  w-[80%] flex justify-around gap-5 items-center'>
        <div className='h-[100%] w-[55%] overflow-y-auto overflow-x-hidden '>
          <div className='h-[300px] w-[70%] mt-10 flex flex-col justify-evenly items-center bg-gray-200 rounded-2xl'>
            <div className='h-[40%] w-[90%] flex justify-around'>
              <div className='w-[45%] h-[90%] flex items-center justify-around'>
                <div className='bg-gray-100 rounded-3xl p-1'><Percent size={32} color='black' ></Percent></div>
                <div className='flex flex-col justify-evenly items-center text-xl font-semibold'>
                  <div>Return Yield</div>
                  <div>{data?.expectedYield}</div>
                </div>
              </div>
                <div className='w-[45%] h-[90%] flex items-center justify-around'>
                <div className='bg-gray-100 rounded-3xl p-1'><DollarSign size={32} color='black' ></DollarSign></div>
                <div className='flex flex-col justify-evenly items-center text-xl font-semibold'>
                  <div>Return Yield</div>
                  <div>{data?.expectedYield}</div>
                </div>
              </div>
            </div>
             <div className='h-[40%] w-[90%] flex justify-around'>
              <div className='w-[45%] h-[90%] flex items-center justify-around'>
                <div className='bg-gray-100 rounded-3xl p-1'><Calendar size={32} color='black' ></Calendar></div>
                <div className='flex flex-col justify-evenly items-center text-xl font-semibold'>
                  <div>Return Yield</div>
                  <div>{data?.expectedYield}</div>
                </div>
              </div>
                <div className='w-[45%] h-[90%] flex items-center justify-around'>
                <div className='bg-gray-100 rounded-3xl p-1'><CloudUpload size={32} color='black' ></CloudUpload></div>
                <div className='flex flex-col justify-evenly items-center text-xl font-semibold'>
                  <div>Return Yield</div>
                  <div>{data?.expectedYield}</div>
                </div>
              </div>
            </div>
            </div>  
            <div className='h-[350px] w-[90%] mt-10 flex flex-col justify-evenly items-center bg-gray-200 rounded-2xl gap-5'>
              <div className='text-3xl font-semibold flex justify-evenly gap-4 items-center mt-4'>
                <div>HighLight</div>
                <Star width={32}></Star>
                </div>
            <div className='h-[40%] w-[90%] flex justify-around'>
              <div className='w-[40%] p-1 h-[90%] flex flex-col items-center justify-evenly bg-teal-500 rounded-2xl'>
                <div className='flex flex-col justify-evenly items-center text-2xl font-semibold'>
                  <div>Return Yield</div>
                  <div>{data?.expectedYield}</div>
                </div>
                  <div className='flex justify-end-safe w-[100%]'><Percent size={32} color='black' ></Percent></div>
              </div>
               <div className='w-[40%] p-1 h-[90%] flex flex-col items-center justify-evenly bg-teal-500 rounded-2xl'>
                <div className='flex flex-col justify-evenly items-center text-2xl font-semibold'>
                  <div>Return Yield</div>
                  <div>{data?.expectedYield}</div>
                </div>
                  <div className='flex justify-end-safe w-[100%]'><Percent size={32} color='black' ></Percent></div>
              </div>
            </div>
             <div className='h-[40%] w-[90%] flex justify-around'>
            <div className='w-[40%] p-1 h-[90%] flex flex-col items-center justify-evenly bg-teal-500 rounded-2xl'>
                <div className='flex flex-col justify-evenly items-center text-2xl font-semibold'>
                  <div>Return Yield</div>
                  <div>{data?.expectedYield}</div>
                </div>
                  <div className='flex justify-end-safe w-[100%]'><Percent size={32} color='black' ></Percent></div>
              </div>
              <div className='w-[40%] p-1 h-[90%] flex flex-col items-center justify-evenly bg-teal-500 rounded-2xl'>
                <div className='flex flex-col justify-evenly items-center text-2xl font-semibold'>
                  <div>Return Yield</div>
                  <div>{data?.expectedYield}</div>
                </div>
                  <div className='flex justify-end-safe w-[100%]'><Percent size={32} color='black' ></Percent></div>
              </div>
            </div>
            </div>
             <div className='h-[350px] w-[90%] mt-10 flex flex-col justify-evenly items-center bg-gray-200 rounded-2xl gap-3 overflow-y-auto '>
              <div className='flex mt-3 justify-evenly items-center text-3xl font-semibold'>
                <div>About StartUp</div>
                <StampIcon width={32}></StampIcon>
              </div>
              <div className='flex flex-col items-center'>
                 <div className='text-2xl text-center'>BluePeak Solutions Limited</div>
                <div className='w-[90%] flex justify-center items-center text-md pb mt-3 text-center'>
                  BluePeak Solutions is a tech consulting firm based in Austin, Texas, specializing in cloud infrastructure, cybersecurity, and data analytics. Founded in 2014, it serves clients across healthcare, finance, and education. Known for its agile and customized solutions, BluePeak employs over 200 experts. Its flagship service, CloudGuard™, supports secure cloud migrations. The company values innovation, sustainability, and ethical data use.
                </div>
                 <div className='text-2xl mt-3 text-center'>Financial Statement </div>
                 <div className='w-[90%] h-[250px] flex gap-3 items-center justify-center'>
                  <div className='bg-amber-500 w-[90%] '><img src='/assets/download 1.png'></img></div>
                 </div>
                 <div  className='w-[90%]  h-fit p-2 flex flex-col gap-2'>
                  <div className='flex  w-[100%]  h-[100px] justify-evenly items-center'>
                    <div className='bg-teal-600 rounded-2xl w-[25%] h-[90%] text-center flex flex-col items-center justify-center'>
                      <div className='font-medium text-2xl'>Text1</div>
                      <div className='font-light text-xl'>Text2</div>
                    </div>
                    <div className='bg-teal-600 rounded-2xl w-[25%] h-[90%] text-center flex flex-col items-center justify-center'>
                      <div className='font-medium text-2xl'>Text1</div>
                      <div className='font-light text-xl'>Text2</div>
                    </div>
                    <div className='bg-teal-600 rounded-2xl w-[25%] h-[90%] text-center flex flex-col items-center justify-center'>
                      <div className='font-medium text-2xl'>Text1</div>
                      <div className='font-light text-xl'>Text2</div>
                    </div>
                  </div>
                  <div className='flex  w-[100%]  h-[100px] justify-evenly items-center'>
                   <div className='bg-teal-600 rounded-2xl w-[25%] h-[90%] text-center flex flex-col items-center justify-center'>
                      <div className='font-medium text-2xl'>Text1</div>
                      <div className='font-light text-xl'>Text2</div>
                    </div>
                    <div className='bg-teal-600 rounded-2xl w-[25%] h-[90%] text-center flex flex-col items-center justify-center'>
                      <div className='font-medium text-2xl'>Text1</div>
                      <div className='font-light text-xl'>Text2</div>
                    </div>
                    <div className='bg-teal-600 rounded-2xl w-[25%] h-[90%] text-center flex flex-col items-center justify-center'>
                      <div className='font-medium text-2xl'>Text1</div>
                      <div className='font-light text-xl'>Text2</div>
                    </div>
                  </div>
                 </div>
              </div>
              </div> 
               <div className='h-[550px] w-[90%] mt-10 flex flex-col justify-evenly items-center bg-gray-200 rounded-2xl gap-3 overflow-y-auto'>
                <div className='w-[90%] h-[250px] flex justify-around items-center'>
                  <img src='/assets/A 1.png'></img>
                  <div className='w-[35%] h-[120px] bg-teal-400 rounded-2xl'>
                    <div className='h-[55%] w-full bg-teal-600 rounded-2xl flex flex-col justify-evenly items-center'>
                      <div className='text-xl'>A-Positive</div>
                      <div className='text-xl'>CARE</div>
                    </div>
                    <div className='h-[45%] flex flex-col items-center justify-evenly text-sm'>
                      <div>Rating Rationalize</div>
                      <div>Rating Date: 18-Apr-2024</div>
                    </div> 
                  </div>
                </div>
                <div className='w-[90%] h-[290px] text-md flex flex-col gap-2'>
                  <div>Credit rating by different rating agencies indicates the bond issuer’s ability to repay its debt obligations. A bond can be rated by one or more SEBI registered credit rating agencies e.g. CRISIL, CARE, ICRA, IND, BWR, ACUITE, INFOMETRICS.</div>
                  <div>Bonds/NCDs with A credit rating are considered to have an adequate degree of safety regarding timely servicing of debt obligations. Such Bonds/NCDs carry low credit risk.</div>
                  <div>Positive Outlook suggests a higher probability of a rating upgrade in the medium term, reflecting favorable trends or events that strengthen the issuer's creditworthiness</div>
                </div>
              </div>
              <div className='h-[350px] w-[90%] mt-10 flex flex-col justify-evenly items-center bg-gray-200 rounded-2xl gap-3 overflow-y-auto p-2'>
                <div className='text-xl'>Other Important Details & Disclosures</div>
                <div className='border-b-3 border-teal-400 h-fit pb-3 w-full'>
                  <div>Company Name</div>
                  <div>BluePeak Solutions Limited</div>
                </div>
                 <div className='border-b-3 border-teal-400 h-fit pb-3 w-full'>
                  <div>Security Name</div>
                  <div>12% BluePeak Solutions Limited Unsecured Rated Listed NCD Maturity 24-Jan-2030</div>
                </div>
                 <div className='border-b-3 border-teal-400 h-fit pb-3 w-full'>
                  <div>ISIN</div>
                  <div>INE515Q08267</div>
                </div>
                <div className='w-full h-[60px] flex justify-evenly items-center'>
                  <div>Looking for More Information ?</div>
                  <div className='flex gap-2 w-fit'>
                    <Download width={20}></Download>
                    <div>DOWNLOAD PROSPECTUS</div>
                    </div>
                </div>
              </div>    
               <div className='h-[450px] w-[90%] mt-10 flex flex-col justify-evenly items-center bg-gray-200 rounded-2xl gap-3 overflow-y-auto pb-4'>
                <div className='text-2xl w-[90%] mt-6 '><div className='text-left pl-4'>Taxation</div></div>
                <div className='w-[90%] h-[100px]'>
                  <div className='h-[80%] w-[60%] bg-teal-500 rounded-2xl flex justify-evenly items-center'>
                    <div className='text-4xl'>10%</div>
                    <div className='text-xl w-[60%]'>TDS on Interest Income*</div>
                  </div>
                </div>
                <div className='w-[90%] h-[300x] flex flex-col gap-2'>
                  <div>*Given TDS is indicative and fully claimable while filing ITR. The interest income from this bond will be taxable and will appear in the additional source of income in your ITR. Please consult your tax advisor for precise taxation details</div>
                  <div>As a listed bond, it is subject to capital gains tax based on the holding period. A holding period of less than 1 year qualifies as short-term, while more than 1 year qualifies as long-term.</div>
                  <div>You can submit your Form 15G/15H to the registrar and debenture trustee of the bond to avoid the TDS deduction</div>
                  <a href='https://incometaxindia.gov.in/forms/income-tax%20rules/103120000000007845.pdf'>Download form</a>
                </div>
              </div>
            <div className='h-[350px] w-[90%] mt-10 flex flex-col justify-evenly items-center bg-gray-200 rounded-2xl gap-3 overflow-y-auto pb-3'>
              <div className='flex mt-3 justify-evenly items-center text-3xl font-semibold'>
              <img src='/assets/Clip path group.png'></img>
              </div>
              <div className='flex flex-col justify-around items-center gap-3 w-[90%]'>
                <div className='text-xl text-center'>
                  Need Help?
                </div>
                <div className='text-xl text-center '>
                  Talk to our Support Team for free. We will help you through your investment journey.
                </div>
              </div>
              <div className='bg-teal-300 rounded-2xl p-2 text-xl'>Contact Us</div>
              </div>      
        </div>
        <div className='h-[70%] w-[30%] rounded-2xl bg-gray-200 flex flex-col justify-evenly items-center pb-2'>
          <div className='h-[40%] w-[70%] bg-teal-400 mt-4 flex flex-col justify-evenly items-center text-2xl text-center rounded-2xl'>
            <Book size={48}></Book>
            <div>Bond is Currently <br></br>  Out of Stock</div>
          </div>
           <div className='h-[15%] w-[50%] bg-teal-400 mt-4 flex items-center justify-center text-1xl font-semibold rounded-2xl'>
            <div>Download Cashflow</div>
           </div>
            <div className='h-[15%] w-[70%] bg-blue-400 mt-4 flex items-center justify-center text-1xl font-semibold rounded-2xl'>
              <div>Explore more Option</div>
            </div>
        </div>
       </div>
    </div>
  </div>
  )
}

export default Startupdetails