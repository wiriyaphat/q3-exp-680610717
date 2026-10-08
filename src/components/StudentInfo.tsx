import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function StudentInfo() {
  return (
    // Use Drawer component to display student information
    // <div className="flex-1 p-4">
    //   <button className="border border-gray-300 rounded-md px-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
    //     Wiriyaphat Phromphong
    //   </button>
    // </div>
    <Drawer swipeDirection="left">
      <DrawerTrigger render={<Button variant="outline" />}>
        Wiriyaphat Phromphong
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-xl font-bold">
            ข้อมูลนักศึกษา
          </DrawerTitle>
          <DrawerDescription>Student information</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          {
            /* Content here */

            <Card className="relative mx-auto w-full max-w-sm pt-0 h-full ">
              <div className="absolute inset-0 z-30" />
              <img
                src="../../public/AngryProfile.jpg"
                alt="Student Profile"
                className="relative z-20 inset-x-0 top-0 h-90 w-full object-cover brightness-60 dark:brightness-40"
              />
              <CardHeader>
                <CardTitle>Wiriyaphat Phromphong</CardTitle>
                <CardDescription className="">
                  praput pratum prasong
                  <div className="grid grid-flow-row gap-2 mt-5">
                    <div className="flex gap-2">
                      <Badge>Hobbies</Badge> <p>ฟังเพลง เล่นเกม เดินเล่น</p>
                    </div>
                    <div className="flex gap-2">
                      <Badge>Email</Badge> <p>wiriyaphat_p@cmu.ac.th</p>
                    </div>
                    <div className="flex gap-2">
                      <Badge>Social</Badge>{" "}
                      <p>https://www.facebook.com/Thiiiiiiiiw</p>
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>

              <CardFooter>
                <p>รหัสนักศึกษา: 680610717</p>
              </CardFooter>
            </Card>
          }
        </div>
        {/* <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose render={<Button variant="outline" />}>
            Cancel
          </DrawerClose>
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
}
