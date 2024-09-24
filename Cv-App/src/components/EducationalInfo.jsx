import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Calendar,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const EducationalInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [educationalInfo, setEducationalInfo] = useState({
    Degree: "",
    Institution: "",
    StartDate: "",
    EndDate: "",
    Description: "",
  });

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationalInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const InfoItem = ({ icon, label, value }) => (
    <div className="flex items-center space-x-2 mb-2">
      {icon}
      <span className="font-semibold w-32">{label}:</span>
      <span>{value}</span>
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
                  className="w-full"
                />
              </div>
            ))}
            <div className="flex justify-end">
              <Button onClick={handleSave}>Save</Button>
            </div>
          </form>
        ) : (
          <>
            {Object.entries(educationalInfo).map(([key, value]) => (
              <InfoItem
                key={key}
                icon={<GraduationCap size={24} />}
                label={key.charAt(0).toUpperCase() + key.slice(1)}
                value={value}
              />
            ))}
            <div className="flex justify-end">
              <Button onClick={handleEdit}>Edit</Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};
export default EducationalInfo;
