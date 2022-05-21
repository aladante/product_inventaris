--
-- PostgreSQL database dump
--

-- Dumped from database version 11.16 (Debian 11.16-1.pgdg90+1)
-- Dumped by pg_dump version 13.7 (Debian 13.7-0+deb11u1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

--
-- Name: location; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.location (
    location_id bigint NOT NULL,
    number integer NOT NULL,
    street character varying(255)
);


ALTER TABLE public.location OWNER TO postgres;

--
-- Name: location_location_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.location_location_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.location_location_id_seq OWNER TO postgres;

--
-- Name: location_location_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.location_location_id_seq OWNED BY public.location.location_id;


--
-- Name: product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product (
    product_id bigint NOT NULL,
    expire_date date
);


ALTER TABLE public.product OWNER TO postgres;

--
-- Name: product_at_location; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product_at_location (
    product_at_location_id bigint NOT NULL,
    amount integer NOT NULL,
    created_at timestamp without time zone,
    location_id bigint,
    product_id bigint
);


ALTER TABLE public.product_at_location OWNER TO postgres;

--
-- Name: product_at_location_product_at_location_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.product_at_location_product_at_location_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_at_location_product_at_location_id_seq OWNER TO postgres;

--
-- Name: product_at_location_product_at_location_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.product_at_location_product_at_location_id_seq OWNED BY public.product_at_location.product_at_location_id;


--
-- Name: product_product_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.product_product_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_product_id_seq OWNER TO postgres;

--
-- Name: product_product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.product_product_id_seq OWNED BY public.product.product_id;


--
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(20)
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.roles_id_seq OWNER TO postgres;

--
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;


--
-- Name: user_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_detail (
    id bigint NOT NULL,
    password character varying(120),
    username character varying(20)
);


ALTER TABLE public.user_detail OWNER TO postgres;

--
-- Name: user_detail_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_detail_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_detail_id_seq OWNER TO postgres;

--
-- Name: user_detail_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_detail_id_seq OWNED BY public.user_detail.id;


--
-- Name: user_roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_roles (
    user_id bigint NOT NULL,
    role_id integer NOT NULL
);


ALTER TABLE public.user_roles OWNER TO postgres;

--
-- Name: location location_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.location ALTER COLUMN location_id SET DEFAULT nextval('public.location_location_id_seq'::regclass);


--
-- Name: product product_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product ALTER COLUMN product_id SET DEFAULT nextval('public.product_product_id_seq'::regclass);


--
-- Name: product_at_location product_at_location_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_at_location ALTER COLUMN product_at_location_id SET DEFAULT nextval('public.product_at_location_product_at_location_id_seq'::regclass);


--
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);


--
-- Name: user_detail id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_detail ALTER COLUMN id SET DEFAULT nextval('public.user_detail_id_seq'::regclass);


--
-- Data for Name: location; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.location (location_id, number, street) FROM stdin;
\.


--
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product (product_id, expire_date) FROM stdin;
\.


--
-- Data for Name: product_at_location; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product_at_location (product_at_location_id, amount, created_at, location_id, product_id) FROM stdin;
\.


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (id, name) FROM stdin;
1	ROLE_USER
2	ROLE_MODERATOR
3	ROLE_ADMIN
\.


--
-- Data for Name: user_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_detail (id, password, username) FROM stdin;
\.


--
-- Data for Name: user_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_roles (user_id, role_id) FROM stdin;
\.


--
-- Name: location_location_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.location_location_id_seq', 1, false);


--
-- Name: product_at_location_product_at_location_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_at_location_product_at_location_id_seq', 1, false);


--
-- Name: product_product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_product_id_seq', 1, false);


--
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.roles_id_seq', 3, true);


--
-- Name: user_detail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_detail_id_seq', 1, false);


--
-- Name: location location_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.location
    ADD CONSTRAINT location_pkey PRIMARY KEY (location_id);


--
-- Name: product_at_location product_at_location_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_at_location
    ADD CONSTRAINT product_at_location_pkey PRIMARY KEY (product_at_location_id);


--
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (product_id);


--
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- Name: user_detail user_detail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_detail
    ADD CONSTRAINT user_detail_pkey PRIMARY KEY (id);


--
-- Name: user_roles user_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY (user_id, role_id);


--
-- Name: product_at_location fk20mlj6ov6ilju5xnjjajby8t8; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_at_location
    ADD CONSTRAINT fk20mlj6ov6ilju5xnjjajby8t8 FOREIGN KEY (product_id) REFERENCES public.product(product_id);


--
-- Name: user_roles fk411xjm896kl8bwxu1wpsay56j; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT fk411xjm896kl8bwxu1wpsay56j FOREIGN KEY (user_id) REFERENCES public.user_detail(id);


--
-- Name: user_roles fkh8ciramu9cc9q3qcqiv4ue8a6; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT fkh8ciramu9cc9q3qcqiv4ue8a6 FOREIGN KEY (role_id) REFERENCES public.roles(id);


--
-- Name: product_at_location fkmrn31spnyk9be88dfqhh05quv; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_at_location
    ADD CONSTRAINT fkmrn31spnyk9be88dfqhh05quv FOREIGN KEY (location_id) REFERENCES public.location(location_id);


--
-- PostgreSQL database dump complete
--

