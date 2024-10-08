import React, { useState, useEffect } from "react";
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

const GeneralInfo = ({ setGeneralInfo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    occupation: "",
    education: "",
    birthDate: "",
  });

  useEffect(() => {
    setGeneralInfo(personalInfo);
  }, [personalInfo, setGeneralInfo]);

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
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
          {isEditing ? "Edit Personal Information" : "Personal Information"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <form className="space-y-4">
            {Object.entries(personalInfo).map(([key, value]) => (
              <div key={key} className="flex items-center space-x-4">
                <Label htmlFor={key} className="w-32">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Label>
                <Input
                  id={key}
                  name={key}
                  value={value}
                  onChange={handleChange}
                  type={key === "birthDate" ? "date" : "text"}
                  placeholder={key === "birthDate" ? "YYYY-MM-DD" : value}
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
            <h2 className="text-2xl font-bold mb-4">{personalInfo.name}</h2>
            <InfoItem
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value={personalInfo.email}
              placeholder="your.email@example.com"
            />
            <InfoItem
              icon={<Phone className="h-4 w-4" />}
              label="Phone"
              value={personalInfo.phone}
              placeholder="123-456-7890"
            />
            <InfoItem
              icon={<MapPin className="h-4 w-4" />}
              label="Address"
              value={personalInfo.address}
              placeholder="123 Main St, Anytown, USA"
            />
            <InfoItem
              icon={<Briefcase className="h-4 w-4" />}
              label="Occupation"
              value={personalInfo.occupation}
              placeholder="Your Occupation"
            />
            <InfoItem
              icon={<GraduationCap className="h-4 w-4" />}
              label="Education"
              value={personalInfo.education}
              placeholder="Your Education"
            />
            <InfoItem
              icon={<Calendar className="h-4 w-4" />}
              label="Birth Date"
              value={personalInfo.birthDate}
              placeholder="YYYY-MM-DD"
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

export default GeneralInfo;
