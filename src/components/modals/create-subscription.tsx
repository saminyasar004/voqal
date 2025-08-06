import { ArrowLeft, DollarSign, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FormEvent, FormEventHandler, useState } from "react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}
export default function CreateSubscription({ isOpen, onClose }: Props) {
    const [data, setData] = useState({
        name: "",
        price: "",
        description: "",
        discount: "",
        features: [],
    });

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex items-center gap-4 mb-4">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={onClose}
                        className="flex items-center gap-2 px-4 py-2 rounded-full border-gray-300 bg-transparent"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Previous
                    </Button>
                </div>

                <h1 className="text-xl font-semibold text-gray-900 mb-4">
                    Create New Plan
                </h1>

                <div className="border rounded-lg p-6 space-y-2">
                    <form className="grid grid-cols-2 gap-4">
                        <div>
                            <Label
                                htmlFor="planName"
                                className="text-sm font-medium text-gray-900 mb-2 block"
                            >
                                Plan Name
                            </Label>
                            <Input
                                id="planName"
                                name="planName"
                                placeholder="Enter Plan Name"
                                className="w-full"
                            />
                        </div>
                        <div>
                            <Label
                                htmlFor="Price"
                                className="text-sm font-medium text-gray-900 mb-2 block"
                            >
                                Price
                            </Label>
                            <div className="relative flex items-center">
                                <DollarSign className="!w-3.5 absolute left-2" />
                                <Input
                                    id="price"
                                    name="price"
                                    className="w-full !ps-6"
                                    type="number"
                                />
                            </div>
                        </div>

                        <div>
                            <Label
                                htmlFor="description"
                                className="text-sm font-medium text-gray-900 mb-2 block"
                            >
                                Short Description
                            </Label>
                            <Input
                                id="description"
                                name="description"
                                placeholder="Enter short description"
                                className="w-full"
                            />
                        </div>

                        <div>
                            <Label
                                htmlFor="Discount(%)"
                                className="text-sm font-medium text-gray-900 mb-2 block"
                            >
                                Discount (%)
                            </Label>
                            <Input
                                id="Discount"
                                name="Discount"
                                type="number"
                                placeholder="Enter discount percentange"
                                className="w-full"
                            />
                        </div>
                    </form>

                    <div>
                        <Label
                            htmlFor="Discount(%)"
                            className="text-sm font-medium text-gray-900 mb-2 block"
                        >
                            Features
                        </Label>

                        <ul className="col-span-2 flex-col flex space-y-4">
                            {data.features.map((item) => (
                                <div className="px-2 py-2 border rounded-lg">{item}</div>
                            ))}
                        </ul>
                        <form
                            onSubmit={(e: FormEvent<HTMLFormElement>) => {
                                e.preventDefault();
                                const form = e.currentTarget;
                                const input = form.elements.namedItem(
                                    "new_feature",
                                ) as HTMLInputElement;

                                if (!input) return;

                                setData((prev) => ({
                                    ...prev,
                                    features: [...prev.features, input.value],
                                }));

                                input.value = "";
                            }}
                            className="space-y-4 mt-4"
                        >
                            <Input
                                placeholder="Enter Feature..."
                                name="new_feature"
                                id="new_feature"
                            />

                            <div>
                                <Button
                                    variant="outline"
                                    className="flex items-center gap-1 px-5"
                                >
                                    <Plus className="h-4 w-4" />
                                    Add Feature
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="flex justify-end items-center gap-6">
                    <Button variant="outline" onClick={onClose} className="py-5">
                        Cancel
                    </Button>
                    <Button className="py-5">Create Plan</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
