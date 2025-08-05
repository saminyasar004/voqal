import AvatarImg from "@/assets/images/avatar.jpg";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Eye, EyeOff, Edit } from "lucide-react";
import DashboardHeader from "@/components/common/dashboard-header";

export default function EditProfile({
    profileId,
    isSuperAdmin,
}: {
    profileId: string;
    isSuperAdmin: boolean;
}) {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
    const [newBookingNotifications, setNewBookingNotifications] = useState(true);
    const [callTransferAlerts, setCallTransferAlerts] = useState(true);

    const [profileData, setProfileData] = useState({
        fullName: "Pappu Roy",
        email: "pappyroy6393@gmail.com",
        number: "+88 01405366393",
    });

    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    return (
        <section className="w-full pb-8 bg-[#F5F5F5]">
            {/* dashboard header */}
            <DashboardHeader />

            <div className="flex justify-between gap-1 flex-1 px-6 py-4">
                <div className="flex flex-col gap-1">
                    <h3 className="text-xl text-primary font-semibold">
                        { isSuperAdmin ?  "Admin":"Business Owner" } Profile
                    </h3>
                    <p className="text-sm text-foreground">
                        { isSuperAdmin ?  "Admin":"Business Owner" }'s personal profile and security system.
                    </p>
                </div>
            </div>

            <div className="p-6">
                <div className="w-full">
                    <div className="p-4">
                        <div className="w-full">
                            <Card className="bg-white">
                                <CardContent className="p-8">
                                    {/* Profile Header */}
                                    <div className="flex gap-4 justify-center items-center mb-8">
                                        <div className="relative mb-4">
                                            <Avatar className="w-24 h-24">
                                                <AvatarImage src={AvatarImg} alt="Pappu" />
                                                <AvatarFallback className="text-xl">P</AvatarFallback>
                                            </Avatar>
                                            <div className="absolute -bottom-1 -right-1 bg-black rounded-full p-2">
                                                <Edit className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                        <h2 className="text-2xl font-semibold">Pappu</h2>
                                    </div>

                                    {/* Tabs */}
                                    <Tabs
                                        defaultValue="edit-profile"
                                        className="w-full items-center flex flex-col"
                                    >
                                        <TabsList className="grid w-1/2 grid-cols-3 mb-8">
                                            <TabsTrigger
                                                value="edit-profile"
                                            // className="data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                                            >
                                                Edit Profile
                                            </TabsTrigger>
                                            <TabsTrigger
                                                value="change-password"
                                            // className="data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                                            >
                                                Change Password
                                            </TabsTrigger>
                                            <TabsTrigger
                                                value="notification"
                                            // className="data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                                            >
                                                Notification
                                            </TabsTrigger>
                                        </TabsList>

                                        {/* Edit Profile Tab */}
                                        <TabsContent
                                            value="edit-profile"
                                            className="w-full space-y-6"
                                        >
                                            <div className="text-center mb-8">
                                                <h3 className="text-xl font-semibold">
                                                    Edit Your Profile
                                                </h3>
                                            </div>

                                            <div className="space-y-6">
                                                <div className="space-y-2">
                                                    <Label
                                                        htmlFor="fullName"
                                                        className="text-base font-medium"
                                                    >
                                                        Full Name
                                                    </Label>
                                                    <Input
                                                        id="fullName"
                                                        value={profileData.fullName}
                                                        onChange={(e) =>
                                                            setProfileData({
                                                                ...profileData,
                                                                fullName: e.target.value,
                                                            })
                                                        }
                                                        className="h-12 text-base"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <Label
                                                        htmlFor="email"
                                                        className="text-base font-medium"
                                                    >
                                                        Email
                                                    </Label>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        value={profileData.email}
                                                        onChange={(e) =>
                                                            setProfileData({
                                                                ...profileData,
                                                                email: e.target.value,
                                                            })
                                                        }
                                                        className="h-12 text-base"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <Label
                                                        htmlFor="number"
                                                        className="text-base font-medium"
                                                    >
                                                        Number
                                                    </Label>
                                                    <Input
                                                        id="number"
                                                        value={profileData.number}
                                                        onChange={(e) =>
                                                            setProfileData({
                                                                ...profileData,
                                                                number: e.target.value,
                                                            })
                                                        }
                                                        className="h-12 text-base"
                                                    />
                                                </div>
                                            </div>

                                            <Button className="w-full h-12 bg-black text-white hover:bg-gray-800 text-base font-medium rounded-full">
                                                Save & Change
                                            </Button>
                                        </TabsContent>

                                        {/* Change Password Tab */}
                                        <TabsContent
                                            value="change-password"
                                            className="w-full space-y-6"
                                        >
                                            <div className="text-center mb-8">
                                                <h3 className="text-xl font-semibold">
                                                    Edit Your Password
                                                </h3>
                                            </div>

                                            <div className="space-y-6">
                                                <div className="space-y-2">
                                                    <Label
                                                        htmlFor="currentPassword"
                                                        className="text-base font-medium"
                                                    >
                                                        Current Password
                                                    </Label>
                                                    <div className="relative">
                                                        <Input
                                                            id="currentPassword"
                                                            type={showCurrentPassword ? "text" : "password"}
                                                            value={passwordData.currentPassword}
                                                            onChange={(e) =>
                                                                setPasswordData({
                                                                    ...passwordData,
                                                                    currentPassword: e.target.value,
                                                                })
                                                            }
                                                            placeholder="***************"
                                                            className="h-12 text-base pr-12"
                                                        />
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="sm"
                                                            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                                                            onClick={() =>
                                                                setShowCurrentPassword(!showCurrentPassword)
                                                            }
                                                        >
                                                            {showCurrentPassword ? (
                                                                <EyeOff className="h-4 w-4" />
                                                            ) : (
                                                                <Eye className="h-4 w-4" />
                                                            )}
                                                        </Button>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label
                                                        htmlFor="newPassword"
                                                        className="text-base font-medium"
                                                    >
                                                        New Password
                                                    </Label>
                                                    <div className="relative">
                                                        <Input
                                                            id="newPassword"
                                                            type={showNewPassword ? "text" : "password"}
                                                            value={passwordData.newPassword}
                                                            onChange={(e) =>
                                                                setPasswordData({
                                                                    ...passwordData,
                                                                    newPassword: e.target.value,
                                                                })
                                                            }
                                                            placeholder="***************"
                                                            className="h-12 text-base pr-12"
                                                        />
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="sm"
                                                            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                                                            onClick={() =>
                                                                setShowNewPassword(!showNewPassword)
                                                            }
                                                        >
                                                            {showNewPassword ? (
                                                                <EyeOff className="h-4 w-4" />
                                                            ) : (
                                                                <Eye className="h-4 w-4" />
                                                            )}
                                                        </Button>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label
                                                        htmlFor="confirmPassword"
                                                        className="text-base font-medium"
                                                    >
                                                        Confirm New Password
                                                    </Label>
                                                    <div className="relative">
                                                        <Input
                                                            id="confirmPassword"
                                                            type={showConfirmPassword ? "text" : "password"}
                                                            value={passwordData.confirmPassword}
                                                            onChange={(e) =>
                                                                setPasswordData({
                                                                    ...passwordData,
                                                                    confirmPassword: e.target.value,
                                                                })
                                                            }
                                                            placeholder="***************"
                                                            className="h-12 text-base pr-12"
                                                        />
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="sm"
                                                            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                                                            onClick={() =>
                                                                setShowConfirmPassword(!showConfirmPassword)
                                                            }
                                                        >
                                                            {showConfirmPassword ? (
                                                                <EyeOff className="h-4 w-4" />
                                                            ) : (
                                                                <Eye className="h-4 w-4" />
                                                            )}
                                                        </Button>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between py-4">
                                                    <div>
                                                        <h4 className="text-base font-medium">
                                                            Two-factor authentication
                                                        </h4>
                                                        <p className="text-sm text-gray-600">
                                                            Add an extra layer of security to your account
                                                        </p>
                                                    </div>
                                                    <Switch
                                                        checked={twoFactorEnabled}
                                                        onCheckedChange={setTwoFactorEnabled}
                                                    />
                                                </div>
                                            </div>

                                            <Button className="w-full h-12 bg-black text-white hover:bg-gray-800 text-base font-medium rounded-full">
                                                Save & Change
                                            </Button>
                                        </TabsContent>

                                        {/* Notification Tab */}
                                        <TabsContent
                                            value="notification"
                                            className="w-full space-y-6"
                                        >
                                            <div className="text-center mb-8">
                                                <h3 className="text-xl font-semibold">
                                                    Notification Preferences
                                                </h3>
                                            </div>

                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between p-4 border border-[#DCDCDC] rounded-lg">
                                                    <div>
                                                        <h4 className="text-base font-medium">
                                                            New Booking Notifications
                                                        </h4>
                                                        <p className="text-sm text-gray-600">
                                                            Get notified when AI makes a new booking
                                                        </p>
                                                    </div>
                                                    <Switch
                                                        checked={newBookingNotifications}
                                                        onCheckedChange={setNewBookingNotifications}
                                                    />
                                                </div>

                                                <div className="flex items-center justify-between p-4 border border-[#DCDCDC] rounded-lg">
                                                    <div>
                                                        <h4 className="text-base font-medium">
                                                            Call Transfer Alerts
                                                        </h4>
                                                        <p className="text-sm text-gray-600">
                                                            Alert when AI transfers calls to human
                                                        </p>
                                                    </div>
                                                    <Switch
                                                        checked={callTransferAlerts}
                                                        onCheckedChange={setCallTransferAlerts}
                                                    />
                                                </div>
                                            </div>
                                        </TabsContent>
                                    </Tabs>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
