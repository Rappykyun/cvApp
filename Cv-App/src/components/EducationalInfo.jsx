import React, { useState, useEffect } from "react";
import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const EducationalInfo = ({ setEducationalInfo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [educationalInfo, setEducationalInfoState] = useState({
    degree: "",
    institution: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  useEffect(() => {
    setEducationalInfo(educationalInfo);
  }, [educationalInfo, setEducationalInfo]);

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationalInfoState((prevInfo) => ({ ...prevInfo, [name]: value }));
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
          {isEditing
            ? "Edit Educational Information"
            : "Educational Information"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <form className="space-y-4">
            {Object.entries(educationalInfo).map(([key, value]) => (
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
              icon={<GraduationCap className="h-4 w-4" />}
              label="Degree"
              value={educationalInfo.degree}
              placeholder="Bachelor of Science in Computer Science"
            />
            <InfoItem
              icon={<GraduationCap className="h-4 w-4" />}
              label="Institution"
              value={educationalInfo.institution}
              placeholder="University of Example"
            />
            <InfoItem
              icon={<Calendar className="h-4 w-4" />}
              label="Start Date"
              value={educationalInfo.startDate}
              placeholder="YYYY-MM-DD"
            />
            <InfoItem
              icon={<Calendar className="h-4 w-4" />}
              label="End Date"
              value={educationalInfo.endDate}
              placeholder="YYYY-MM-DD"
            />
            <InfoItem
              icon={<GraduationCap className="h-4 w-4" />}
              label="Description"
              value={educationalInfo.description}
              placeholder="Description of your education"
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

export default EducationalInfo;
