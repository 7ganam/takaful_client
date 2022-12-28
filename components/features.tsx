import React from "react";
import Image from "next/image";
import styles from "../styles/Features.module.css";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section id="info" className={styles.features}>
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ marginBottom: "30px", lineHeight: "50px" }}
        >
          ما هي مبادرة مساحات الانبساط التعاونية؟
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          هي مبادرة لتوفير وجبات غذاء صحية و ذات قيمة عالية بأجور رمزية للأسر
          المتوسطة..تهدف المبادرة الي انشاء نموذج للتعاون الاجتماعي يتمتع
          بالاستمرارية و القابلية للنسخ و الانتشار.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-3"
        >
          النشاط الحالي للمبادرة مبني على توفير الوجبات و توصيلها الى الاسر
          ..يتم الترتيب في الوقت الراهن لمد الانشطة لتشمل مراكز طعام في المناطق
          المناسبة لتكون مصدرا مستمرا للتعاون.
        </motion.p>
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className={styles.imageWrapper}
        >
          <div>
            <Image layout="fill" src="/chrimp.jpg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
