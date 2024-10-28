import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import AddProducts from "./addproducts/page";
import Users from "./users/page";
import Orders from "./orders/page";
import Feedback from "./feedback/page";

export default function Layout({ children }) {
    return (
        <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="w-full">
                <Link href={'/admin/dashboard'}><TabsTrigger value="dashboard">Dashboard</TabsTrigger></Link>
                <Link href={'/admin/users'}><TabsTrigger value="users">Users</TabsTrigger></Link>
                <Link href={'/admin/addproducts'}><TabsTrigger value="addproducts">Add Products</TabsTrigger></Link>
                <Link href={'/admin/orders'}><TabsTrigger value="orders">Orders</TabsTrigger></Link>
                <Link href={'/admin/feedback'}><TabsTrigger value="feedback">Feedback</TabsTrigger></Link>
            </TabsList>
            <TabsContent value="dashboard">
                <div>{children}</div> {/* Render dashboard content here */}
            </TabsContent>
            <TabsContent value="users">
                    {children}
                {/* <div><Users /></div> */}
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
