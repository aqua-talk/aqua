import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import mime from "mime-types";
import { Image } from "react-bootstrap";
import defaultAvatar from "../../assets/images/user.png";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });
  const initialValues = { name: "", statusMessage: "", profileImage: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState();
  const [preview, setPreview] = useState();
  const [loading, setLoading] = useState(false);

  const inputOpenImageRef = useRef();

  const handleOpenImageRef = () => {
    inputOpenImageRef.current.click();
  };

  const handleUploadImage = async (event) => {
    const file = event.target.files[0];
    console.log("type", typeof file, "file", file);
    const metadata = { contentType: mime.lookup(file.name) };
    console.log("metadata", metadata, "mime", mime);

    setFormValues({
      ...formValues,
      name: "test",
      profileImage: { file: file, metadata: metadata },
    });
    console.log(formValues);
    debugger;
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      let createdUser;

      console.log("createdUser", createdUser);
      setLoading(false);
    } catch (error) {
      setFormErrors(error.message);
      setLoading(false);
      console.log("error", error.message);
      setTimeout(() => {
        setFormErrors("");
      }, 5000);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        backgroundImage: "linear-gradient(70deg, #3A9995, #C4EBE8)",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 200,
          color: "#fff",
          textShadow: "1px 1px 1px #3A9995",
          marginBottom: 30,
        }}
      >
        프로필 정보
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: 240, display: "flex", flexDirection: "column", color: "#fff" }}
      >
        <p className="warningMessage" style={{ textAlign: "right" }}>
          * 필수 입력
        </p>

        <label for="name">
          이름<span className="warningMessage">*</span>
        </label>
        <input
          type="text"
          name="name"
          {...register("name", { required: true, minLength: 2, maxLength: 8 })}
          style={{ border: "1px solid #3A9995", boxShadow: "1px 1px 1px #3A9995" }}
        />
        {errors.name && errors.name.type === "required" && (
          <p className="warningMessage"> 필수 입력 사항입니다.</p>
        )}
        {errors.name && (errors.name.type === "minLength" || errors.name.type === "maxLength") && (
          <p className="warningMessage"> 입력 길이를 다시 확인해주세요. (2-8글자)</p>
        )}

        <label for="statusMessage">상태메시지</label>
        <input
          type="text"
          name="statusMessage"
          {...register("statusMessage", { required: false, maxLength: 20 })}
          style={{ border: "1px solid #3A9995", boxShadow: "1px 1px 1px #3A9995" }}
        />
        {errors.statusMessage && errors.statusMessage.type === "maxLength" && (
          <p className="warningMessage">
            최대 입력 길이를 초과하였습니다.
            <br /> (최대 20글자)
          </p>
        )}
        <div style={{ marginTop: 20, padding: 20, backgroundColor: "#fff" }}>
          <Image
            src={preview ?? defaultAvatar}
            width={50}
            roundedCircle
            style={{ backgroundColor: "#fff" }}
          />
          <input
            type="file"
            name="image"
            accept="image/jpeg, image/png"
            ref={inputOpenImageRef}
            onChange={handleUploadImage}
            // style={{ display: "none" }}
          />
        </div>
        {/* 
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>프로필 사진</Form.Label>
          <Form.Control type="file" size="sm" />
        </Form.Group> */}
        <div style={{ height: 50, display: "flex", alignItems: "flex-end" }}>
          {formErrors && <p className="warningMessage">{formErrors}</p>}
        </div>
        <input
          type="submit"
          value="확인"
          disabled={loading}
          style={{
            marginTop: 10,
            height: 40,
            backgroundColor: "#C4EBE8",
            color: "#3A9995",
            border: "1px solid #3A9995",
            boxShadow: "1px 1px 1px #3A9995",
          }}
        />
      </form>
    </div>
  );
}

export default RegisterPage;
