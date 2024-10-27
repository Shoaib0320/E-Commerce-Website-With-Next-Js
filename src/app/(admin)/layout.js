// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import Link from "next/link";

// export default function Layout({ childern }) {
//     return (
//         <Tabs defaultValue="dashboard" className="w-full">
//             <TabsList className='w-full'>
//                 <Link href={'/admin/dashboard'}><TabsTrigger value="dashboard">Dashbaord</TabsTrigger></Link>
//                 <Link href={'/admin/users'}><TabsTrigger value="users">Users</TabsTrigger></Link>
//                 <Link href={'/admin/addproducts'}><TabsTrigger value="addproducts">Add Products</TabsTrigger></Link>
//                 <Link href={'/admin/orders'}><TabsTrigger value="orders">Orders</TabsTrigger></Link>
//                 <Link href={'/admin/feedback'}><TabsTrigger value="feedback">Feedback</TabsTrigger></Link>
//             </TabsList>
//             <TabsContent value="dashboard">{childern}</TabsContent>
//             <TabsContent value="users">{childern}</TabsContent>
//             <TabsContent value="addproducts">{childern}</TabsContent>
//             <TabsContent value="orders">{childern}</TabsContent>
//             <TabsContent value="feedback">{childern}</TabsContent>
//         </Tabs>
//     );
//   }
  








import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import AddProducts from "./admin/addproducts/page";
import Users from "./admin/users/page";
import Orders from "./admin/orders/page";
import Feedback from "./admin/feedback/page";

export default function Layout({ children }) {
    return (
        <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="w-full">
                <Link href={'/admin/dashboard'}><TabsTrigger value="dashboard">Dashboard</TabsTrigger></Link>
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="addproducts">Add Products</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="feedback">Feedback</TabsTrigger>
            </TabsList>
            <TabsContent value="dashboard">
                <div>{children}</div> {/* Render dashboard content here */}
            </TabsContent>
            <TabsContent value="users">
                <div><Users /></div>
            </TabsContent>
            <TabsContent value="addproducts">
                <div><AddProducts /></div>
            </TabsContent>
            <TabsContent value="orders">
                <div><Orders /></div>
            </TabsContent>
            <TabsContent value="feedback">
                <div><Feedback /></div>
            </TabsContent>
        </Tabs>
    );
}
