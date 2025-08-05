import DashboardHeader from "@/components/common/dashboard-header";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@mantine/core";
import { OctagonX, Pencil, Plus, X } from "lucide-react";
import { useState } from "react";

interface Privacy {
  id: number;
  title: string;
  description: string;
  list: string[];
}

export default function PrivacyPolicyEdit() {
  let initialValue: Privacy[] = [
    {
      id: 1,
      title: "Information We Collect",
      description:
        "We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This includes:",
      list: [
        "Your name, email address, and password.",
        "Usage data such as pages visited and time spent.",
        "Support requests, chat logs, or other communication.",
        "Technical data like IP address, browser, and device information.",
      ],
    },
    {
      id: 2,
      title: "How We Use Your Information",
      description:
        "We use your data to operate, maintain, and improve our services, as well as to communicate with you.",
      list: [
        "To personalize content and recommendations.",
        "To provide customer support and respond to inquiries.",
        "To send important updates, alerts, and newsletters.",
        "To monitor and analyze usage patterns for optimization.",
      ],
    },
    {
      id: 3,
      title: "Data Sharing and Disclosure",
      description:
        "We may share your information with trusted third parties in specific circumstances, including:",
      list: [
        "With service providers who help us deliver our services.",
        "With legal authorities when required by law or subpoena.",
        "During business transfers such as mergers or acquisitions.",
        "With your explicit consent.",
      ],
    },
    {
      id: 4,
      title: "Your Rights and Choices",
      description:
        "You have the right to access, update, or delete your personal data. You can also:",
      list: [
        "Opt out of promotional communications.",
        "Request data portability.",
        "Withdraw consent for data processing.",
        "Review and update your account information.",
      ],
    },
  ];

  const [privacies, setPrivacies] = useState<Privacy[]>(() =>
    structuredClone(initialValue),
  );

  const [editable, setEditable] = useState<number[]>([]);

  function isChanged(): boolean {
    return JSON.stringify(initialValue) !== JSON.stringify(privacies);
  }

  function resetChange() {
    setPrivacies(() => structuredClone(initialValue));
  }

  async function saveChange() {
    try {
      // API CALL HERE

      initialValue = structuredClone(privacies);
    } catch (err) {
      console.log(err);
    }
  }

  function handleEditChange(id: number, field: keyof Privacy, value: string) {
    setPrivacies((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  }

  function handleListItemChange(id: number, index: number, value: string) {
    setPrivacies((prev) =>
      prev.map((privacy) => {
        if (privacy.id !== id) return privacy;

        const updatedList = [...privacy.list];
        updatedList[index] = value;

        return { ...privacy, list: updatedList };
      }),
    );
  }

  function removeListItem(id: number, index: number) {
    setPrivacies((prev) =>
      prev.map((privacy) => {
        if (privacy.id !== id) return privacy;
        const newList = privacy.list.filter((item, i) => i !== index);
        return {
          ...privacy,
          list: newList,
        };
      }),
    );
  }

  function addListItem(id: number) {
    setPrivacies((prev) =>
      prev.map((privacy) =>
        privacy.id === id
          ? {
              ...privacy,
              list: [...privacy.list, ""],
            }
          : privacy,
      ),
    );
  }

  function addPrivacy() {
    setPrivacies((prev) => {
      // it'll make sure the ID is random.
      const id = Math.max(...prev.map((p) => Number(p.id) || 0)) + 1;

      makeEditable(id);
      let newL = [...prev, { id, title: "", description: "", list: [] }];
      console.log(newL);
      return newL;
    });
  }

  function deletePrivacy(id: number) {
    setPrivacies((prev) => prev.filter((privacy) => privacy.id !== id));
  }

  function makeEditable(id: number) {
    setEditable((prev) => [...prev, id]);
  }

  function makeUnEditable(id: number) {
    setEditable((prev) => prev.filter((p) => p !== id));
    setPrivacies((prev) =>
      prev.map((privacy) =>
        privacy.id === id
          ? {
              ...privacy,
              list: privacy.list.filter((item) => item.trim() !== ""),
            }
          : privacy,
      ),
    );
  }

  return (
    <section className="w-full pb-8 bg-[#F5F5F5]">
      <DashboardHeader />
      <div className="flex justify-between gap-1 flex-1 px-6 py-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl text-primary font-semibold">
            Privacy Policy Management
          </h3>
          <p className="text-sm text-foreground">
            Create and manage your platform's privacy policy
          </p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">
              Current Privacy Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Card className="border">
              <CardHeader className="py-2">
                <h4 className="text-xl font-semibold">Voqal Privacy Policy</h4>
              </CardHeader>
              <CardContent className="py-0">
                <div className="flex w-full justify-between text-sm opacity-60">
                  <span>Version: 2.1</span>
                  <span>Last Updated: 2024-01-20</span>
                  <span>Effective Date: 2024-01-20</span>
                </div>
              </CardContent>
            </Card>

            {privacies.map((privacy) => {
              const isEditing = editable.includes(privacy.id);

              return (
                <div className="relative group" key={privacy.id}>
                  <Card className="border rounded-lg">
                    <CardHeader className="py-3 space-y-2">
                      {isEditing ? (
                        <div>
                          <Label
                            htmlFor={`privacyTitle-${privacy.id}`}
                            className="text-sm font-medium text-gray-900 block mb-1"
                          >
                            Privacy Title
                          </Label>
                          <Input
                            id={`privacyTitle-${privacy.id}`}
                            placeholder="Enter privacy title"
                            className="w-full"
                            value={privacy.title}
                            onChange={(e) =>
                              handleEditChange(
                                privacy.id,
                                "title",
                                e.target.value,
                              )
                            }
                          />
                        </div>
                      ) : (
                        <h4 className="text-xl font-semibold">
                          {privacy.title}
                        </h4>
                      )}
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {isEditing ? (
                        <div>
                          <Label
                            htmlFor={`privacyDescription-${privacy.id}`}
                            className="text-sm font-medium text-gray-900 block mb-1"
                          >
                            Privacy Description
                          </Label>
                          <Input
                            id={`privacyDescription-${privacy.id}`}
                            placeholder="Enter privacy description"
                            className="w-full"
                            value={privacy.description}
                            onChange={(e) =>
                              handleEditChange(
                                privacy.id,
                                "description",
                                e.target.value,
                              )
                            }
                          />
                        </div>
                      ) : (
                        <p className="text-sm text-gray-700">
                          {privacy.description}
                        </p>
                      )}

                      <div
                        className={`flex flex-col space-y-2 ${isEditing ? "border p-4 rounded-lg" : ""}`}
                      >
                        {privacy.list.map((item, i) => (
                          <div className="relative">
                            {isEditing ? (
                              <span className="group">
                                <Input
                                  key={i}
                                  id={`privacyItem-${privacy.id}-${i}`}
                                  placeholder="Enter privacy list item"
                                  className="w-full"
                                  value={item}
                                  onChange={(e) =>
                                    handleListItemChange(
                                      privacy.id,
                                      i,
                                      e.target.value,
                                    )
                                  }
                                />
                                <button
                                  onClick={() => removeListItem(privacy.id, i)}
                                  className="group-hover:flex hidden items-center justify-center"
                                >
                                  <X className="!w-4 !h-4 text-red-500 absolute right-2 top-0 translate-y-1/2" />
                                </button>
                              </span>
                            ) : (
                              <li
                                key={i}
                                className="text-sm text-gray-600 list-disc list-inside"
                              >
                                {item}
                              </li>
                            )}
                          </div>
                        ))}

                        {isEditing && (
                          <div className="pt-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => addListItem(privacy.id)}
                              className="flex items-center gap-1"
                            >
                              <Plus className="h-4 w-4" />
                              Add Item
                            </Button>
                          </div>
                        )}
                      </div>

                      {isEditing && (
                        <div className="pt-4">
                          <Button onClick={() => makeUnEditable(privacy.id)}>
                            Done
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <div className="absolute top-2 right-4 hidden group-hover:flex gap-2 z-10">
                    <button
                      className="rounded-lg hover:bg-slate-900/10 p-2 text-blue-800 transition"
                      onClick={() => makeEditable(privacy.id)}
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      className="rounded-lg hover:bg-slate-900/10 p-2 text-red-800 transition"
                      onClick={() => deletePrivacy(privacy.id)}
                    >
                      <OctagonX className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            })}

            <div>
              <Button
                variant="outline"
                onClick={addPrivacy}
                className="flex items-center gap-1 px-5 rounded-sm"
              >
                <Plus className="h-4 w-4" />
                Add Item
              </Button>
            </div>
          </CardContent>
          {isChanged() && (
            <div className="flex gap-4 pl-5" onClick={resetChange}>
              <Button variant="outline" className="px-8 py-3 bg-transparent">
                Rese Reset
              </Button>
              <Button
                className="bg-primary hover:bg-gray-800 text-white px-8 py-3"
                onClick={saveChange}
              >
                Update
              </Button>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
