import React, { useState, useEffect } from "react";
import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const WorkInfo = ({ setWorkInfo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [workInfo, setWorkInfoState] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  useEffect(() => {
    setWorkInfo(workInfo);
  }, [workInfo, setWorkInfo]);

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkInfoState((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const InfoItem = ({ icon, label, value, placeholder }) => (
    <div className="flex items-center space-x-2 mb-2">
      {icon}
      <span className="font-semibold w-32">{label}:</span>
      <span>
        {value || <span className="text-muted-foreground">{placeholder}</span>}
      </span>
    </div>
  );

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>
          {isEditing ? "Edit Work Information" : "Work Information"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <form className="space-y-4">
            {Object.entries(workInfo).map(([key, value]) => (
              <div key={key} className="flex items-center space-x-4">
                <Label htmlFor={key} className="w-32">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Label>
                <Input
                  id={key}
                  name={key}
                  value={value}
                  onChange={handleChange}
                  type={key.includes("Date") ? "date" : "text"}
                  className="flex-1"
                />
              </div>
            ))}
            <div className="flex justify-end">
              <Button onClick={handleSave} className="">
                Save
              </Button>
            </div>
          </form>
        ) : (
          <div>
            <InfoItem
              icon={<Briefcase className="h-4 w-4" />}
              label="Company"
              value={workInfo.company}
              placeholder="Your Company"
            />
            <InfoItem
              icon={<Briefcase className="h-4 w-4" />}
              label="Position"
              value={workInfo.position}
              placeholder="Your Position"
            />
            <InfoItem
              icon={<Calendar className="h-4 w-4" />}
              label="Start Date"
              value={workInfo.startDate}
              placeholder="YYYY-MM-DD"
            />
            <InfoItem
              icon={<Calendar className="h-4 w-4" />}
              label="End Date"
              value={workInfo.endDate}
              placeholder="YYYY-MM-DD"
            />
            <InfoItem
              icon={<Briefcase className="h-4 w-4" />}
              label="Description"
              value={workInfo.description}
              placeholder="Job description"
            />
            <div className="flex justify-end">
              <Button onClick={handleEdit} className="">
                Edit
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WorkInfo;
