import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({
		// baseUrl: "https://endlessly-unified-guppy.ngrok-free.app",
		baseUrl: "http://10.10.13.75:8888",
		prepareHeaders: (headers) => {
			return headers;
		},
	}),
	// Define tag types for cache management
	tagTypes: ["User"],
	endpoints: (builder) => ({
		// User-related mutations
		signUp: builder.mutation({
			query: (userData) => ({
				url: "/auth/normal_signup/",
				method: "POST",
				body: userData,
			}),
			invalidatesTags: ["User"], // Invalidate User-related queries on signup
		}),
		verifyOtp: builder.mutation({
			query: (otpData) => ({
				url: "/auth/verify_otp/",
				method: "POST",
				body: otpData,
			}),
			invalidatesTags: ["User"], // Invalidate User-related queries on OTP verification
		}),
		resendOtp: builder.mutation({
			query: (otpData) => ({
				url: "/auth/resend_otp/",
				method: "POST",
				body: otpData,
			}),
			invalidatesTags: ["User"], // Invalidate User-related queries on OTP verification
		}),
		resetPassword: builder.mutation({
			query: (data) => ({
				url: "/auth/reset-password/",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["User"], // Invalidate User-related queries on password update
		}),

		logIn: builder.mutation({
			query: (loginData) => ({
				url: "/auth/login/",
				method: "POST",
				body: loginData,
			}),
			invalidatesTags: ["User"], // Invalidate User-related queries on login
		}),
		otpVerify: builder.mutation({
			query: (otpData) => ({
				url: "/auth/verify_otp/",
				method: "POST",
				body: otpData,
			}),
			invalidatesTags: ["User"], // Invalidate User-related queries on OTP verification
		}),
		reSendOtp: builder.mutation({
			query: (email) => ({
				url: "/auth/resend_otp/",
				method: "POST",
				body: email,
			}),
			invalidatesTags: ["User"], // Invalidate User-related queries on OTP resend
		}),
		verifyEmail: builder.mutation({
			query: (email) => ({
				url: "/auth/forgot-password/",
				method: "POST",
				body: email,
			}),
			invalidatesTags: ["User"], // Invalidate User-related queries on email verification
		}),
		updatePassword: builder.mutation({
			query: (data) => ({
				url: "/auth/reset-password/",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["User"], // Invalidate User-related queries on password update
		}),
		// Agency-related queries
		// getAllAgency: builder.query({
		// 	query: () => "/public/agencies/",
		// 	providesTags: ["Agency"], // Cache this query with Agency tag
		// }),
		// getTopAgency: builder.query({
		// 	query: () => "/public/top-agencies/",
		// 	providesTags: ["Agency"], // Cache this query with Agency tag
		// }),
		// searchAgency: builder.query({
		// 	query: (search) => `/public/agencies/?search=${search}`,
		// 	providesTags: ["Agency"], // Cache this query with Agency tag
		// }),

		// filterTourPlanPublic: builder.query({
		// 	query: (query) =>
		// 		`/public/tour-plans/?search=${query.search}&min_budget=${query.min}&max_budget=${query.max}&country=${query.country}&type=${query.type}&category=${query.category}`,
		// 	providesTags: ["TourPlan"],
		// }),
	}),
});

export const {
	useSignUpMutation,
	useVerifyOtpMutation,
	useResendOtpMutation,
	useResetPasswordMutation,

	useLogInMutation,
	useOtpVerifyMutation,
	useReSendOtpMutation,
	useVerifyEmailMutation,
	useUpdatePasswordMutation,
} = baseApi;
