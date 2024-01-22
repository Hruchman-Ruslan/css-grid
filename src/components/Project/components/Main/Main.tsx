import { FC } from "react";

import pictureOne from "../../images/pictureOne.png";
import pictureOneSmall from "../../images/pictureOneSmall.png";
import pictureTwo from "../../images/pictureTwo.png";
import pictureThree from "../../images/pictureThree.png";
import one from "../../images/one.png";
import two from "../../images/two.png";
import three from "../../images/three.png";
import four from "../../images/four.png";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
import youtube from "../../images/youtube.png";
import tiktok from "../../images/tiktok.png";
import github from "../../images/github.png";
import twitter from "../../images/twitter.png";
import picture from "../../images/picture.png";

import styles from "./Main.module.css";

export const Main: FC = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <ul className={styles.posts}>
            <li className={styles.post}>
              <a href="#">
                <picture>
                  <source media="(min-width: 768px)" srcSet={pictureOne} />

                  <source
                    media="(min-width: 320px) and (max-width: 767px)"
                    srcSet={pictureOneSmall}
                  />

                  <img src={pictureOneSmall} alt="Description of Image" />
                </picture>
                <div className={styles.overlay}>
                  <h2 className={`${styles.postTitle} ${styles.subTitle}`}>
                    Коти та їхні чудові навички: від полювання до загадкових
                    здібностей
                  </h2>
                </div>
              </a>
            </li>
            <li className={styles.post}>
              <a href="#">
                <img
                  src={pictureTwo}
                  alt="scary kitten"
                  className={styles.postImg}
                />
                <div className={styles.overlay}>
                  <h2 className={`${styles.postTitle} ${styles.subTitle}`}>
                    Коти в літературі та мистецтві: від Егіпетських богів до
                    сучасних майстрів
                  </h2>
                </div>
              </a>
            </li>
            <li className={styles.post}>
              <a href="#">
                <img src={pictureThree} alt="cat" className={styles.postImg} />
                <div className={styles.overlay}>
                  <h2 className={`${styles.postTitle} ${styles.subTitle}`}>
                    Котячі породи для активних власників: як вибрати компаньйона
                  </h2>
                </div>
              </a>
            </li>
          </ul>
          <section className={styles.longread}>
            <ul className={styles.blog}>
              <li className={styles.blogItem}>
                <a href="#" className={styles.blogLink}>
                  <img src={one} alt="cat" className={styles.blogPhoto} />
                  <div className={styles.wrapper}>
                    <h2 className={`${styles.blogTitle} ${styles.subTitle}`}>
                      Забавні факти про котів, які вас здивують
                    </h2>
                    <p className={styles.blogText}>
                      Веселі та цікаві факти про котів, які піднімуть вам
                      настрій та розкажуть про їхні унікальність.
                    </p>
                  </div>
                </a>
              </li>
              <li className={styles.blogItem}>
                <a href="#" className={styles.blogLink}>
                  <img src={two} alt="cats" className={styles.blogPhoto} />
                  <div className={styles.wrapper}>
                    <h2 className={`${styles.blogTitle} ${styles.subTitle}`}>
                      Найпопулярніші породи котів: який кіт підходить вам?
                    </h2>
                    <p className={styles.blogText}>
                      Вивчіть найпопулярніші породи котів і їхні особливості,
                      щоб зробити інформований вибір, який підходить саме вам.
                    </p>
                  </div>
                </a>
              </li>
              <li className={styles.blogItem}>
                <a href="#" className={styles.blogLink}>
                  <img src={four} alt="red-cat" className={styles.blogPhoto} />
                  <div className={styles.wrapper}>
                    <h2 className={`${styles.blogTitle} ${styles.subTitle}`}>
                      Як піклуватися про вашого пухнастого друга: догляд за
                      котом
                    </h2>
                    <p className={styles.blogText}>
                      Дізнайтеся про основні аспекти догляду за котом, включаючи
                      годування, гігієну та взаємодію з вашим улюбленцем.
                    </p>
                  </div>
                </a>
              </li>
              <li className={styles.blogItem}>
                <a href="#" className={styles.blogLink}>
                  <img src={three} alt="red-cat" className={styles.blogPhoto} />
                  <div className={styles.wrapper}>
                    <h2 className={`${styles.blogTitle} ${styles.subTitle}`}>
                      Історія та культурна значущість котів в усьому світ
                    </h2>
                    <p className={styles.blogText}>
                      Вивчіть, як коти впливали на культури різних народів та
                      дізнайтеся історію спільного життя людей і котів.
                    </p>
                  </div>
                </a>
              </li>
            </ul>
            <div className={styles.socials}>
              <h2 className={`${styles.postTitle} ${styles.title}`}>
                Соцмережі
              </h2>
              <ul className={styles.socialsList}>
                <li className={styles.socialsItem}>
                  <a href="#" className={styles.socialsLink}>
                    <img
                      src={instagram}
                      alt="instagram"
                      className={styles.socialsIcon}
                    />
                    <p className={styles.socialsSubscribers}>230.000</p>
                  </a>
                </li>
                <li className={styles.socialsItem}>
                  <a href="#" className={styles.socialsLink}>
                    <img
                      src={facebook}
                      alt="facebook"
                      className={styles.socialsIcon}
                    />
                    <p className={styles.socialsSubscribers}>230.000</p>
                  </a>
                </li>
                <li className={styles.socialsItem}>
                  <a href="#" className={styles.socialsLink}>
                    <img
                      src={youtube}
                      alt="youtube"
                      className={styles.socialsIcon}
                    />
                    <p className={styles.socialsSubscribers}>230.000</p>
                  </a>
                </li>
                <li className={styles.socialsItem}>
                  <a href="#" className={styles.socialsLink}>
                    <img
                      src={tiktok}
                      alt="tiktok"
                      className={styles.socialsIcon}
                    />
                    <p className={styles.socialsSubscribers}>230.000</p>
                  </a>
                </li>
                <li className={styles.socialsItem}>
                  <a href="#" className={styles.socialsLink}>
                    <img
                      src={github}
                      alt="github"
                      className={styles.socialsIcon}
                    />
                    <p className={styles.socialsSubscribers}>230.000</p>
                  </a>
                </li>
                <li className={styles.socialsItem}>
                  <a href="#" className={styles.socialsLink}>
                    <img
                      src={twitter}
                      alt="twitter"
                      className={styles.socialsIcon}
                    />
                    <p className={styles.socialsSubscribers}>230.000</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.video}>
              <h2 className={`${styles.videoTitle} ${styles.title}`}>
                Відео з пухнастиком
              </h2>
              <img src={picture} alt="video" />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
